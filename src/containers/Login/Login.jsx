import React from "react";
import { useForm } from "react-hook-form";

const Login = (props) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log("log in submit logic");
    console.log(data);
  };
  return (
    <div className="container my-5  p-5 shadow-sm rounded ">
      <h1 className="display-5">log in</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-group my-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            ref={register({
              required: {
                value: true,
                message: "Email field is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
            placeholder="Enter email"
          />
          {errors.email && <small>{errors.email.message}</small>}
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>
        <div className="form-group my-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            ref={register({
              required: {
                value: true,
                message: "Password field is required",
              },
            })}
            placeholder="Password"
          />
          {errors.password && <small>{errors.password.message}</small>}
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

// Signup.propTypes = {};

export default Login;
