import ProfileAvatar from "../assets/profile_avatar.png";
import PropTypes from "prop-types"; // ES6

TweetInput.propTypes = {
  tweetText: PropTypes.string.isRequired,
  setTweetText: PropTypes.func.isRequired,
};

function TweetInput({ tweetText, setTweetText }) {
  return (
    <div className="flex w-full items-center justify-center gap-3 px-4 py-2">
      <img
        className="h-9 w-9 flex-shrink-0 self-start rounded-7xl"
        src={ProfileAvatar}
      />
      <textarea
        cols={30}
        rows={10}
        placeholder="What's happening?"
        className="font-regular w-full resize-none bg-transparent text-base leading-normal text-neutral-50 placeholder:text-neutral-600 focus:outline-none"
        value={tweetText}
        onChange={(e) => {
          setTweetText(e.target.value);
        }}
      />
    </div>
  );
}

export default TweetInput;
