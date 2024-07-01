import PropTypes from "prop-types"; // ES6

StepHeading.propTypes = {
  children: PropTypes.node,
};

function StepHeading({ children }) {
  return (
    <h1 className="text-2xl font-bold leading-normal text-neutral-50">
      {children}
    </h1>
  );
}

export default StepHeading;
