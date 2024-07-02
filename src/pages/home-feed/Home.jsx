import Tweet from "../../components/Tweet";

// import Toast from "../../components/Toast";

import NewTweet from "../../components/NewTweetButton";
import Header from "../../components/Header";
import Tabs from "../../components/Tabs";
import ProfileAvatar from "../../components/Avatar";
import Footer from "../../components/Footer";
import { TweetContext } from "../../contexts/index";

import { useContext } from "react";

function Home() {
  const tweets = useContext(TweetContext);
  const tweetsData = [...tweets.userTweets].reverse();

  return (
    <div className="bg-neutral-1000">
      <header className="top-0 flex w-full flex-col items-center bg-neutral-1000">
        <section className="flex w-full items-center border-b border-neutral-700 px-4 py-5">
          <ProfileAvatar />
          <Header />
        </section>
      </header>
      <Tabs />
      <main className="flex w-full flex-col pb-20">
        <section>
          {tweetsData.map((tweet, index) => (
            <Tweet key={index} {...tweet} />
          ))}
        </section>

        {/* <Toast message="Copied to clipboard." /> */}

        <NewTweet />

        <Footer page="home" />
      </main>
    </div>
  );
}

export default Home;
