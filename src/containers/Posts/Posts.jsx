import React, { useState } from "react";
import PostCreation from "./PostCreation/PostCreation";
import Post from "./Post/Post";

const postsBase = [
  {
    id: Date.now() + Math.random(),
    author: "Farhhhhhhhhhhhhat",
    content: "I love you 3000 ❤️ ❤️ ❤️ ❤️.",
    date: new Date(),
    likes: [],
    comments: [],
  },
  {
    id: Date.now() + Math.random(),
    author: "Mohibuul",
    content: "I love chicken nugget. 🐔",
    date: new Date(),
    likes: [],
    comments: [],
  },
];

const Posts = (props) => {
  const [posts, setPosts] = useState(postsBase);

  const createNewPost = (content) => {
    const newPosts = [...posts];
    const post = {
      id: Date.now() + Math.random(),
      author: "hima",
      content: content,
      date: new Date(),
      likes: [],
      comments: [],
    };
    newPosts.push(post);
    setPosts(newPosts);
  };
  const postsEl = posts.map((x) => (
    <Post
      key={x.id}
      id={x.id}
      author={x.author}
      date={x.date}
      content={x.content}
    ></Post>
  ));
  return (
    <div className={"container"}>
      <PostCreation create={createNewPost}></PostCreation>
      {postsEl}
    </div>
  );
};

Posts.propTypes = {};

export default Posts;
