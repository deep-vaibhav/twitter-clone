import React, { useState } from "react";

import "./TweetBox.scss";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Vaibhav Deep",
      username: "vaibhav-d9",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "VD",
    });

    setTweetMessage("");
    setTweetImage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar>VD</Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          />
        </div>
        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
      </form>
      <Button type="submit" onClick={sendTweet} className="tweetBox_button">
        Tweet
      </Button>
    </div>
  );
}

export default TweetBox;
