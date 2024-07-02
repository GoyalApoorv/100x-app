// src/pages/login/CreateAccountStep4.js
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import { UserContext } from "../../contexts/UserContext";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";
import { supabase } from "../../supabaseClient"; // Import supabase client

function CreateAccountStep4() {
  const navigate = useNavigate();
  const { formData } = useContext(UserContext);
  const [password, setPassword] = useState("");

  const handleSetPassword = async (e) => {
    e.preventDefault();
    const { user, error } = await supabase.auth.updateUser({
      email: formData.email,
      password,
    });
    if (error) {
      console.error("Error setting password:", error);
    } else {
      console.log("Password set successfully", user);
      navigate(URLs.feed);
    }
  };

  return (
    <form onSubmit={handleSetPassword} className="flex flex-col items-start gap-5 self-stretch">
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>You`ll need a password</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Make sure it's 8 characters or more
          </p>
          <Fieldset
            required
            text="Password"
            type="password"
            inputValue={password}
            onInputChange={(value) => setPassword(value)}
          />
        </div>
      </section>
      <button
        type="submit"
        className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform"
      >
        <Button variant="default" disabled={false}>
          Next
        </Button>
      </button>
    </form>
  );
}
export default CreateAccountStep4;
