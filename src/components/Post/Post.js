import React from "react";

import "./Post.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ShareIcon from "@material-ui/icons/Share";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar>V</Avatar>
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headerText">
            <h3>
              Vaibhav Deep{" "}
              <span className="post_headerSpecial">
                <VerifiedUserIcon className="post_badge" /> @vaibhavdeep46
              </span>
            </h3>
          </div>
          <div className="post_headerDescription">
            <p>Lorem ipsum dolor sit amet</p>
          </div>
        </div>
        <img src="https://media.tenor.com/images/f9807506d90fcd069d50a6f820ba3c01/tenor.gif"></img>
        <div className="post_footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
