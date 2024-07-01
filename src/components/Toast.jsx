import PropTypes from "prop-types"; // ES6

Toast.propTypes = {
  message: PropTypes.string,
};

function Toast(props) {
  return (
    <div className="fixed bottom-24 left-1/2 mx-auto flex -translate-x-1/2 transform items-center justify-center gap-2.5 rounded-8xl bg-searchbar-fill px-8 py-3">
      <p className="whitespace-nowrap text-0.9rem font-normal leading-normal text-neutral-50">
        {props.message}
      </p>
    </div>
  );
}

export default Toast;
