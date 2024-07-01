import { Link } from "react-router-dom";
import Plus from "../assets/plus-content-add.svg";
import { URLs } from "../constants";

function NewTweetButton() {
  return (
    <Link to={URLs.compose}>
      <button className="fixed bottom-20 right-4 items-start gap-2.5 rounded-full bg-twitter-default p-4 shadow-3xl">
        <img alt="NewTweet" className="h-8 w-8 rounded-full" src={Plus} />
      </button>
    </Link>
  );
}

export default NewTweetButton;
