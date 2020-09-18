import React from "react";

import "./TweetBox.scss";
import { Avatar, Button } from "@material-ui/core";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox_input">
          <Avatar>VD</Avatar>
          <input placeholder="What's happening?" type="text" />
        </div>
        <input
          className="tweetBox_imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        />
      </form>
      <Button className="tweetBox_button">Tweet</Button>
    </div>
  );
}

export default TweetBox;
