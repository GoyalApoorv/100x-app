import PropTypes from "prop-types"; // ES6

Text.propTypes = {
  text: PropTypes.string,
};
function Text(props) {
  return (
    <p className="text-base font-medium leading-normal text-neutral-50">
      {props.text}
    </p>
  );
}

export default Text;
