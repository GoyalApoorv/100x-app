import PropTypes from "prop-types"; // ES6

Heading.propTypes = {
  children: PropTypes.node,
};
function Heading({ children }) {
  return (
    <h1 className="text-1.9rem font-bold leading-normal text-neutral-50">
      {children}
    </h1>
  );
}

export default Heading;
