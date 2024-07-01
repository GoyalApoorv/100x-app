import Banner from "./Banner";
import ProfileAvatar from "../assets/profile_avatar.png";
import { Link } from "react-router-dom";
import { URLs } from "../constants";
import Button from "./Button";
import CalenderIcon from "../assets/calendar-icon.svg";
import LinkIcon from "../assets/link-icon.svg";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function ProfileHeader() {
  const { formData } = useContext(UserContext);

  return (
    <header className="w-full border-b border-neutral-700">
      <Banner />
      <section className="relative px-4 pb-3 pt-2">
        {/* Profile Icon */}
        <img
          className="absolute -top-8 h-4.2rem w-4.2rem rounded-7xl border-4 border-neutral-1000"
          src={ProfileAvatar}
        />
        {/* Edit profile */}
        <div className="flex justify-end">
          <Link to={URLs.edit}>
            <Button variant="outline" type="secondary" size="sm">
              Edit Profile
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          {/* Name */}
          <div className="flex flex-col items-start justify-end gap-1">
            <h1 className="text-xl font-bold leading-normal text-neutral-50">
              {formData.name}
            </h1>
            <h2 className="text-0.9rem font-normal leading-normal text-neutral-500">
              {`@${formData.name.replace(/\s/g, "").toLowerCase()}`}
            </h2>
          </div>
          {/* Bio */}
          <div className="text-base font-normal leading-normal text-neutral-50">
            {formData.bio}
          </div>
          {/* Links */}
          <div className="flex flex-shrink items-start gap-5">
            <div className="flex items-center gap-1">
              <img src={LinkIcon} alt="link-icon" />
              <a
                rel="noreferrer"
                target="_blank"
                className="max-w-[140px] flex-wrap truncate text-base font-normal leading-normal text-twitter-default lg:hidden"
                href={formData.website}
              >
                {formData.website}
              </a>
              <a
                rel="noreferrer"
                target="_blank"
                className="hidden text-base font-normal leading-normal text-twitter-default lg:flex"
                href={formData.website}
              >
                {formData.website.replace(/^https:\/\//, "").replace(/\/$/, "")}
              </a>
            </div>
            <div className="flex items-center gap-1">
              <img src={CalenderIcon} alt="calender-icon" />
              <p className="whitespace-nowrap text-base font-normal leading-normal text-neutral-500">
                Joined September 2019
              </p>
            </div>
          </div>
          {/* Followers */}
          <div className="flex items-end gap-5">
            <div className="flex items-end gap-1">
              <p className="text-base font-medium leading-normal text-neutral-50">
                99
              </p>
              <p className="text-base font-normal leading-normal text-neutral-500">
                Following
              </p>
            </div>
            <div className="flex items-end gap-1">
              <p className="text-base font-medium leading-normal text-neutral-50">
                199
              </p>
              <p className="text-base font-normal leading-normal text-neutral-500">
                Followers
              </p>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default ProfileHeader;
