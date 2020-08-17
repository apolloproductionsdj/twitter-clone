import React from 'react';
import './TweetBox.css';
import { Avatar, Button } from "@material-ui/core";


function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://yt3.ggpht.com/a-/AOh14GjXlUz37XrEpFaP0EXQMeyLhdR5dyoqeFcN7X3TFA=s88-c-k-c0xffffffff-no-rj-mo" />
          <input placeholder="What's happening?" type="text" />
        </div>
          <input 
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL" 
            type="text" 
          />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;