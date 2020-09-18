import React from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";

import "./Feed.scss";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_header">
        <h3>Home</h3>
      </div>

      <TweetBox />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
