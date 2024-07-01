import { Link } from "react-router-dom";
import ProfileAvatar from "../assets/profile_avatar.png";
import { URLs } from "../constants";
function Avatar() {
  return (
    <Link to={URLs.profile}>
      <img
        src={ProfileAvatar}
        alt="Profile Picture"
        className="sticky w-9 rounded-full"
      />
    </Link>
  );
}

export default Avatar;
