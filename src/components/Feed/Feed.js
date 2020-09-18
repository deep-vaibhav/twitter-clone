import React, { useEffect, useState } from "react";
import Post from "../Post/Post";
import TweetBox from "../TweetBox/TweetBox";
import db from "../../firebase";

import "./Feed.scss";
import { AddToPhotosTwoTone } from "@material-ui/icons";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      <div className="feed_header">
        <h3>Home</h3>
      </div>

      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
        />
      ))}

      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
