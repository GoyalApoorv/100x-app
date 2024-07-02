import { Link } from "react-router-dom";
import Cancel from "../../assets/cancel.svg";
import TweetInput from "../../components/TweetInput";
import { URLs } from "../../constants";
import { useState } from "react";
import Button from "../../components/Button";
import { useContext } from "react";
import { TweetContext } from "../../contexts";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { UserContext } from "../../contexts/UserContext";

const tweetLimit = 280;

function ComposeTweet() {
  const navigate = useNavigate();
  const { formData: userData } = useContext(UserContext);

  const { userTweets, setUserTweets } = useContext(TweetContext);

  const [tweetText, setTweetText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isTweetExceedingLimit = tweetText.length > tweetLimit;

  const handleTweetPost = async () => {
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 300));
    setUserTweets([
      ...userTweets,
      {
        id: uuidv4(),
        timestamp: Date.now(),
        name: userData.name,
        username: userData.name.replace(/\s/g, "").toLowerCase(),
        postedAt: Date.now(),
        comments: 0,
        retweets: 0,
        likes: 0,
        reach: 0,
        tweetText,
      },
    ]);
    navigate(URLs.feed);
    setIsLoading(false);
    setTweetText("");
  };

  return (
    <div>
      <header className="flex items-center justify-between  px-4 py-3">
        <button onClick={() => navigate(-1)}>
          <img alt="cancel" src={Cancel} />
        </button>
        <Button
          disabled={isTweetExceedingLimit || tweetText.trim() === ""}
          variant="solid"
          size="md"
          onClick={handleTweetPost}
        >
          <span className="whitespace-nowrap text-center text-base font-bold not-italic leading-normal text-neutral-50">
            {isLoading ? "Posting..." : "Post"}
          </span>
        </Button>
        {/* <button
          className="text-white"
          onClick={() => console.log(`Tweets are :`, userTweets)}
        >
          showTweet
        </button> */}
      </header>
      <TweetInput tweetText={tweetText} setTweetText={setTweetText} />

      <footer className="fixed bottom-0 flex items-center gap-5 px-4 py-3">
        <p
          className={`text-sm font-normal leading-normal tracking-wider text-neutral-500`}
        >
          <span
            className={
              isTweetExceedingLimit ? "text-error" : "text-neutral-500"
            }
          >
            {isTweetExceedingLimit
              ? tweetLimit - tweetText.length
              : tweetText.length}
          </span>
          /{tweetLimit}
        </p>
      </footer>
    </div>
  );
}

export default ComposeTweet;
