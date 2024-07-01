/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cancel from "../assets/cancel.svg";
function StepHeader(props) {
  const { step } = props;
  return (
    <div className="flex items-center gap-5 self-stretch py-3">
      <Link to="/">
        <img src={Cancel} alt="cancel-icon" />
      </Link>
      <p className="text-0.9rem font-bold leading-normal text-neutral-50">
        Step {step} of 4
      </p>
    </div>
  );
}

export default StepHeader;
