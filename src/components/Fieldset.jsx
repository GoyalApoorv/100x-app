import { useState } from "react";
import PasswordEye from "../assets/password-eye.svg";
import PropTypes from "prop-types"; // ES6

Fieldset.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
  inputValue: PropTypes.string,
  onInputChange: PropTypes.func,
  error: PropTypes.string, // Add error prop
};

function Fieldset({ text, type, inputValue, onInputChange, error, ...rest }) {
  // Add a state variable to manage password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <fieldset
      className={`group flex items-center self-stretch rounded border border-solid ${
        error ? "border-error" : "border-neutral-500"
      } px-3 py-4 pt-2 focus-within:border-twitter-default`}
    >
      <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
        <div className="px-2">{text}</div>
      </legend>
      <input
        type={showPassword ? "text" : type}
        placeholder={text}
        value={inputValue}
        onChange={(e) => onInputChange(e.target.value)}
        className={`w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none ${
          error ? "border-error" : "" // Add a border color for errors
        }`}
        {...rest}
      />
      {type === "password" && (
        <button
          onClick={togglePasswordVisibility}
          className="group aspect-square h-max w-max rounded-full bg-transparent hover:brightness-125"
        >
          {showPassword ? (
            <svg
              className="h-4 fill-slate-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
            >
              <path d="M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zm151 118.3C226 97.7 269.5 80 320 80c65.2 0 118.8 29.6 159.9 67.7C518.4 183.5 545 226 558.6 256c-12.6 28-36.6 66.8-70.9 100.9l-53.8-42.2c9.1-17.6 14.2-37.5 14.2-58.7c0-70.7-57.3-128-128-128c-32.2 0-61.7 11.9-84.2 31.5l-46.1-36.1zM394.9 284.2l-81.5-63.9c4.2-8.5 6.6-18.2 6.6-28.3c0-5.5-.7-10.9-2-16c.7 0 1.3 0 2 0c44.2 0 80 35.8 80 80c0 9.9-1.8 19.4-5.1 28.2zm9.4 130.3C378.8 425.4 350.7 432 320 432c-65.2 0-118.8-29.6-159.9-67.7C121.6 328.5 95 286 81.4 256c8.3-18.4 21.5-41.5 39.4-64.8L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5l-41.9-33zM192 256c0 70.7 57.3 128 128 128c13.3 0 26.1-2 38.2-5.8L302 334c-23.5-5.4-43.1-21.2-53.7-42.3l-56.1-44.2c-.2 2.8-.3 5.6-.3 8.5z" />
            </svg>
          ) : (
            <img
              src={PasswordEye}
              alt="Password Eye"
              onClick={togglePasswordVisibility} // Add onClick handler to toggle password visibility
              className="cursor-pointer"
            />
          )}
        </button>
      )}
      {error && (
        <div className="mt-1 text-sm whitespace-nowrap text-error">{error}</div> // Display error message
      )}
    </fieldset>
  );
}

export default Fieldset;
