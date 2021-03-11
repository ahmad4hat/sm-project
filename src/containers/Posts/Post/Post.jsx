import React from "react";
import PropTypes from "prop-types";

const Post = ({ author, date, content }) => {
  return (
    <div className={"shadow-sm my-3 p-4"}>
      <div className={"my-3"}>
        <h5 className={"m-0"}>{author}</h5>
        <small>{date.toString()}</small>
      </div>

      <p>{content}</p>
    </div>
  );
};

Post.propTypes = {};

export default Post;
