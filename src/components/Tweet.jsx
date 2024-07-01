import UserAvatar from "../assets/profile_avatar.png";

import Retweet from "../assets/retweet.svg";
import Heart from "../assets/heart.svg";
import Reach from "../assets/reach.svg";
import Share from "../assets/share.svg";
import PropTypes from "prop-types"; // ES6
import Comment from "../assets/comment.svg";
import { cn } from "../lib/utils";

import { getRelativeTime } from "../lib/utils";
import { useContext } from "react";
import { TweetContext } from "../contexts";

Tweet.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  postedAt: PropTypes.number.isRequired,
  tweetText: PropTypes.string.isRequired,
  comments: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
  reach: PropTypes.number.isRequired,
  isLiked: PropTypes.bool,
  isRetweeted: PropTypes.bool,
};

function Tweet({
  id,
  name,
  username,
  postedAt,
  tweetText,
  comments,
  retweets,
  likes,
  reach,
  isLiked,
  isRetweeted,
}) {
  const { userTweets, setUserTweets } = useContext(TweetContext);
  return (
    <div
      data-tweet-id={id}
      className="box-border flex h-min border-b border-neutral-700 px-4 py-2"
    >
      <div className="mr-4 h-12 min-w-fit">
        <img
          src={UserAvatar}
          alt="User Picture"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="mb-1">
          <div className="mb-1 flex gap-1 text-neutral-50">
            <span className="text-base font-medium">{name}</span>
            <span className="text-neutral-500">@{username}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-500">
              {getRelativeTime(postedAt)}
            </span>
          </div>
          <p className="font-regular text-0.9rem text-neutral-50">
            {tweetText}
          </p>
        </div>
        <div className="flex items-center justify-between py-3 text-neutral-500 lg:pr-5">
          {/* <Icon type="Comment" value={comments} /> */}
          <div className="flex items-center justify-between gap-0.3rem">
            <img alt="comments" src={Comment} />
            <span className="text-sm font-normal text-neutral-500">
              {comments}
            </span>
          </div>

          <button
            onClick={() => {
              // Search for the tweet with the id and retrieve its index
              // Then set the tweet with the index to the new value

              const tweets = [...userTweets];

              const currentTweetIndex = tweets.findIndex(
                (tweet) => tweet.id === id,
              );

              const updatedTweet = {
                id,
                name,
                username,
                postedAt,
                tweetText,
                comments,
                retweets,
                likes,
                reach,
                isLiked,
                isRetweeted: !isRetweeted,
              };

              // set the tweet with the index to the new value

              tweets[currentTweetIndex] = updatedTweet;

              setUserTweets(tweets);
            }}
            className={
              isRetweeted
                ? "flex items-center justify-between gap-0.3rem text-[#00BE74]"
                : "flex items-center justify-between gap-0.3rem text-neutral-500"
            }
          >
            {!isRetweeted ? (
              <svg
                width="21"
                height="15"
                viewBox="0 0 21 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="retweet-sv">
                  <path
                    id="Vector 5"
                    d="M3.72097 1.48621L1.56409 3.64312M3.72097 1.48621L5.87787 3.64312M3.72097 1.48621L3.72097 10.7214C3.72097 12.2918 4.99404 13.5649 6.56445 13.5649L11.4858 13.5649"
                    stroke="#525252"
                    strokeWidth="1.42174"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector 4"
                    d="M17.2507 13.5649L19.4076 11.408M17.2507 13.5649L15.0938 11.408M17.2507 13.5649L17.2507 4.32975C17.2507 2.75934 15.9776 1.48627 14.4072 1.48627L9.48585 1.48627"
                    stroke="#525252"
                    strokeWidth="1.42174"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="20"
                height="15"
                viewBox="0 0 20 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="retweet-sv">
                  <path
                    id="Vector 5"
                    d="M3.15688 1.48621L1 3.64312M3.15688 1.48621L5.31379 3.64312M3.15688 1.48621L3.15688 10.7214C3.15688 12.2918 4.42995 13.5649 6.00037 13.5649L10.9217 13.5649"
                    stroke="#00BE74"
                    strokeWidth="1.42174"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector 4"
                    d="M16.6866 13.5649L18.8435 11.408M16.6866 13.5649L14.5297 11.408M16.6866 13.5649L16.6866 4.32975C16.6866 2.75934 15.4136 1.48627 13.8431 1.48627L8.92177 1.48627"
                    stroke="#00BE74"
                    strokeWidth="1.42174"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            )}

            <span className={"text-sm font-normal"}>
              {isRetweeted ? retweets + 1 : retweets}
            </span>
          </button>

          {/* <div className="flex items-center justify-between gap-0.3rem">
            <img src={Retweet} />
            <span className="text-sm font-normal text-neutral-500">
              {retweets}
            </span>
          </div> */}

          <button
            onClick={() => {
              // Search for the tweet with the id and retrieve its index
              // Then set the tweet with the index to the new value

              const tweets = [...userTweets];

              const currentTweetIndex = tweets.findIndex(
                (tweet) => tweet.id === id,
              );

              const updatedTweet = {
                id,
                name,
                username,
                postedAt,
                tweetText,
                comments,
                retweets,
                likes,
                reach,
                isLiked: !isLiked,
                isRetweeted,
              };

              // set the tweet with the index to the new value

              tweets[currentTweetIndex] = updatedTweet;

              setUserTweets(tweets);
            }}
            className={
              isLiked
                ? "flex items-center justify-between gap-0.3rem text-[#F4245E]"
                : " flex items-center justify-between gap-0.3rem text-neutral-500"
            }
          >
            {!isLiked ? (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="heart-sv">
                  <path
                    id="heart-sv_2"
                    d="M8.68949 3.88656L8.06479 3.10989C6.34036 0.96597 3.18154 1.31923 1.8957 3.79981C1.27525 4.99675 1.24436 7.42586 1.81333 8.65259C3.72921 12.7834 7.31758 14.7369 8.0055 15.0815C8.08262 15.1201 8.1527 15.1687 8.22534 15.2152C8.54725 15.4213 8.95834 15.3954 9.25784 15.1376C9.31419 15.089 13.4404 13.2347 15.5657 8.65259C16.1346 7.42586 16.1037 4.99675 15.4833 3.79981C14.1974 1.31923 10.51 0.723394 8.68949 3.88656Z"
                    stroke="#525252"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            ) : (
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="heart-sv">
                  <path
                    id="heart-sv_2"
                    d="M8.12553 3.88656L7.50083 3.10989C5.77639 0.96597 2.61758 1.31923 1.33173 3.79981C0.711282 4.99675 0.680397 7.42586 1.24936 8.65259C3.16525 12.7834 6.75362 14.7369 7.44153 15.0815C7.51865 15.1201 7.58873 15.1687 7.66137 15.2152C7.98329 15.4213 8.39438 15.3954 8.69387 15.1376C8.75023 15.089 12.8765 13.2347 15.0017 8.65259C15.5707 7.42586 15.5398 4.99675 14.9193 3.79981C13.6335 1.31923 9.94603 0.723394 8.12553 3.88656Z"
                    fill="#F4245E"
                    stroke="#F4245E"
                    strokeWidth="1.5"
                  />
                </g>
              </svg>
            )}

            <span className={"text-sm font-normal"}>
              {isLiked ? likes + 1 : likes}
            </span>
          </button>

          <div className="flex items-center justify-between gap-0.3rem">
            <img alt="react" src={Reach} />
            <span className="text-sm font-normal text-neutral-500">
              {reach}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img alt="share" src={Share} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
