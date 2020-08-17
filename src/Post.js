import React from 'react';
import './Post.css';
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';


function Post({displayName, username, verified, text, image, avatar}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://yt3.ggpht.com/a-/AOh14GjXlUz37XrEpFaP0EXQMeyLhdR5dyoqeFcN7X3TFA=s88-c-k-c0xffffffff-no-rj-mo" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Mike Torres{" "}
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge"/> @ApolloDJ
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>I challenge you to build a Twitter clone with React</p>
          </div>
          <img 
            className="post__image"
            src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif" 
            alt="" 
          />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;