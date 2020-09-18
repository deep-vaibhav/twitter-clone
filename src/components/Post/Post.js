import React, { forwardRef } from "react";

import "./Post.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import ShareIcon from "@material-ui/icons/Share";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar>{avatar}</Avatar>
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_headerText">
              <h3>
                {displayName}{" "}
                <span className="post_headerSpecial">
                  {verified && <VerifiedUserIcon className="post_badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post_headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image}></img>
          <div className="post_footer">
            <ChatBubbleOutlineIcon fontSize="small" className="footer_icon" />
            <RepeatIcon fontSize="small" className="footer_icon" />
            <FavoriteBorderIcon fontSize="small" className="footer_icon" />
            <PublishIcon fontSize="small" className="footer_icon" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
