import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";

import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";

function CreateAccountStep4() {
  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>You’ll need a password</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Make sure it’s 8 characters or more
          </p>
          <Fieldset required text="Password" type="password" />
        </div>
      </section>

      <Link
        to={URLs.feed}
        className="fixed bottom-16 left-1/2 w-20.8rem -translate-x-1/2 -translate-y-1/2 transform"
      >
        <Button variant="default" disabled={false}>
          Next
        </Button>
      </Link>
    </>
  );
}
export default CreateAccountStep4;
