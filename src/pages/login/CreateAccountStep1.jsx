import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import { UserContext } from "../../contexts/UserContext";
import { useState } from "react";
import DatePicker from "../../components/DatePicker";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";

function CreateAccountStep1() {
  const navigate = useNavigate();
  const { formData, setFormData } = useContext(UserContext);
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    day: 1,
    month: 0,
    year: 2023,
  });
  const handleInputChange = (field, value) => {
    setInputValues((c) => {
      const updatedValues = {
        ...c,
        [field]: value,
      };
      console.log("🎉updated form :", updatedValues);
      return updatedValues;
    });
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({ ...formData, ...inputValues });
          console.info("💸your submitted values:", inputValues);
          navigate(URLs.signUpStep2);
        }}
        className="flex flex-col items-start gap-5 self-stretch"
      >
        <StepHeading>Create your account</StepHeading>
        <Fieldset
          required
          text="Name"
          type="text"
          minLength={2}
          inputValue={inputValues.name}
          onInputChange={(value) => handleInputChange("name", value)}
        />

        <Fieldset
          required
          text="Email"
          type="email"
          inputValue={inputValues.email}
          onInputChange={(value) => handleInputChange("email", value)}
        />
        <div className="flex flex-col items-start gap-2 self-stretch">
          <h3 className="text-0.9rem font-bold leading-normal text-neutral-50">
            Date of birth
          </h3>
          <p className="text-sm font-normal leading-normal text-secondary">
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
        </div>
        <DatePicker handleInputChange={handleInputChange} />
        <div className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform">
          <Button variant="default">Create Account</Button>
        </div>
      </form>
    </>
  );
}
export default CreateAccountStep1;
