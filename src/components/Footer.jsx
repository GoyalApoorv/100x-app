import { Link } from "react-router-dom";
import HomeActive from "../assets/home-active.svg";
import HomeInactive from "../assets/home-inactive.svg";
import ProfileActive from "../assets/profile-active.svg";
import ProfileInactive from "../assets/profile-inactive.svg";
import PropTypes from "prop-types"; // ES6
import { URLs } from "../constants";

Footer.propTypes = {
  page: PropTypes.oneOf(["home", "profile"]).isRequired,
};

function Footer({ page }) {
  return (
    <footer className="fixed bottom-0 flex w-full items-center justify-center gap-10 border-t border-neutral-800 bg-neutral-1000 px-6 py-1.1rem">
      <Link to={URLs.feed}>
        <img
          alt="home-button"
          src={page === "home" ? HomeActive : HomeInactive}
        />{" "}
      </Link>
      <Link to={URLs.profile}>
        <img
          alt="home-button"
          src={page === "home" ? ProfileInactive : ProfileActive}
        />{" "}
      </Link>
    </footer>
  );
}

export default Footer;
