import PropTypes from "prop-types"; // ES6

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(["sm", "full", "md"]),
  variant: PropTypes.oneOf(["default", "outline", "solid", "icon"]),
  type: PropTypes.oneOf(["primary", "secondary"]),
};

function Button(props) {
  const {
    children = "Add your Text",
    variant = "default",
    type,
    size = "full",
    ...rest
  } = props;

  // const disabledStyles = {
  //   default: "hover:cursor-not-allowed hover:bg-neutral-50 opacity-50",
  //   solid:
  //     "bg-twitter-disabled hover:cursor-not-allowed hover:bg-twitter-disabled   ",
  // }[variant ?? ""]; //?? to check nullish value

  // return disabledStyles[isAuth?'signedIn':'signedOut']

  // const style = disabledStyles[""]; same as above

  // const disabledStyles = disabled
  //   ? variant === "default"
  //     ? " hover:cursor-not-allowed hover:bg-neutral-50 opacity-50"
  //     : variant === "solid"
  //     ? " hover:cursor-not-allowed bg-twitter-disabled hover:bg-twitter-disabled "
  //     : ""
  //   : "";

  const baseStyle = "rounded-full text-base font-bold";
  const variantStyles = {
    default:
      "w-full px-6 py-2 bg-neutral-50 text-neutral-1000 hover:bg-neutral-200 shadow-button backdrop-blur-xl disabled:cursor-not-allowed disabled:bg-neutral-50  disabled:opacity-50",
    outline:
      "gap-2.5 px-6 py-2 border shadow-button border-solid border-button-stroke shadow-3xl backdrop-blur-23.66 text-center",
    solid:
      "gap-2.5 hover:bg-twitter-hover bg-twitter-default  text-neutral-50 disabled:bg-twitter-disabled disabled:cursor-not-allowed",
  };
  const textType = {
    primary: "text-twitter-default",
    secondary: "text-neutral-50",
  };
  const buttonSize = {
    sm: "text-sm px-4 py-1.5 font-bold w-max",
    md: "w-[7rem] px-6 py-3 shadow-3xl md:w-13.8rem md:rounded-6xl",
    full: "p-5 w-full",
  };
  const classes = [
    baseStyle,
    variantStyles[variant],
    textType[type],
    buttonSize[size],
  ].join(" ");

  // const classes = cn(baseStyle, variantStyles[variant]);

  // const classes = `${baseStyle} ${variantStyles[variant]} ${disabledStyles}`;
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export default Button;
