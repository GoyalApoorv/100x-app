import { createContext, useState } from "react";
export const TweetContext = createContext();
import PropTypes from "prop-types"; // ES6

export const TweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState(SampleTweets);

  return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }}>
      {children}
    </TweetContext.Provider>
  );
};

TweetProvider.propTypes = {
  children: PropTypes.node,
};

const SampleTweets = [
  {
    id: "1",
    name: "Apoorv Goyal",
    username: "apoorvgoyal",
    postedAt: 1699355379971,
    tweetText: "You miss 100% of the shots you don't take.",
    comments: 11,
    retweets: 269,
    likes: 1869,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
  {
    id: "2",
    name: "Apoorv Goyal",
    username: "apoorvgoyal",
    postedAt: 1699363303000,
    tweetText: "Setting up 100x",
    comments: 11,
    retweets: 299,
    likes: 189,
    reach: 99,
    isLiked: false,
    isRetweeted: false,
  },
];
