import React from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const PostCreation = ({ create }) => {
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = ({ content }) => {
    create(content);
    reset();
  };

  return (
    <div className="shadow-sm my-5 px-2 py-4 rounded">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h4>Whats on your mind ?</h4>
        <textarea
          type="text"
          name={"content"}
          ref={register({
            required: {
              value: true,
              message: "The post is required",
            },
            minLength: {
              value: 8,
              message: "Post should be at least 8 character long",
            },
          })}
          className="form-control my-3"
          aria-describedby="postHelp"
          placeholder="Enter Post"
          row={5}
        />
        {errors.content && (
          <p className={".text-danger"}>{errors.content.message}</p>
        )}
        <button type={"submit"} className={"btn btn-primary p-2"}>
          Post
        </button>
      </form>
    </div>
  );
};

PostCreation.propTypes = {};

export default PostCreation;
