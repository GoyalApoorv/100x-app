import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";

function CreateAccountStep3() {
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  console.log(userData);
  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>We sent you a code</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Enter it below to verify {formValues.email}
          </p>
          <Fieldset required text="Verification code" type="text" />
          <p className="flex justify-end text-sm font-normal leading-normal text-twitter-default">
            Didn’t receive a code?
          </p>
        </div>
      </section>
      ;
      <Link
        to={URLs.signUpStep4}
        className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform"
      >
        <Button variant="default" disabled={false}>
          Next
        </Button>
      </Link>
    </>
  );
}
export default CreateAccountStep3;
