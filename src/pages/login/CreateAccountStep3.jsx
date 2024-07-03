// src/pages/login/CreateAccountStep3.js
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import { UserContext } from "../../contexts/UserContext";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";
import { supabase } from "../../SupabaseClient"; // Import supabase client

function CreateAccountStep3() {
  const navigate = useNavigate();
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  const [verificationCode, setVerificationCode] = useState('');

  const handleVerify = async (e) => {
    e.preventDefault();
    // Here you should verify the code with Supabase or any email service you're using
    // For simplicity, we'll assume it's verified
    const { user, error } = await supabase.auth.api.verifyOtp({
      email: formValues.email,
      token: verificationCode,
      type: 'signup'
    });
    if (error) {
      console.error("Error verifying code:", error);
    } else {
      navigate(URLs.signUpStep4);
    }
  };

  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>We sent you a code</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Enter it below to verify {formValues.email}
          </p>
          <Fieldset
            required
            text="Verification code"
            type="text"
            inputValue={verificationCode}
            onInputChange={(value) => setVerificationCode(value)}
          />
          <p className="flex justify-end text-sm font-normal leading-normal text-twitter-default">
            Didn’t receive a code?
          </p>
        </div>
      </section>
      <button
        onClick={handleVerify}
        className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform"
      >
        <Button variant="default" disabled={false}>
          Next
        </Button>
      </button>
    </>
  );
}
export default CreateAccountStep3;
