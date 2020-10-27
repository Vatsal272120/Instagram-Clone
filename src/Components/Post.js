import React from "react";
import "../Styles/Post.css";
import { Avatar } from "@material-ui/core";

const Post = ({ user, username, postId, imageUrl, caption, profilePic }) => {
  return (
    <div className='post'>
      {/* header -> avatar + username */}
      <div className='post__header'>
        <Avatar className='post__avatar' alt='' src={profilePic}></Avatar>
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} alt='' className='post__image' />
      {/* image */}

      <h4 className='post__text'>
        <strong>
          {username} {""}
        </strong>
        {""}
        {caption}
      </h4>
      {/* username + caption */}
    </div>
  );
};

export default Post;
