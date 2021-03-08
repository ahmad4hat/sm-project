import React from "react";

const Signup = (props) => {
  return (
    <div className="container my-5 container my-5  p-5 shadow-sm rounded">
      <h1 className="display-5">Signup</h1>
      <form>
        <div className="form-group my-3">
          <label for="exampleInputEmail1">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Name"
          />
          {/* <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small> */}
        </div>

        <div className="form-group my-3">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group my-3">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <div className="form-group my-3">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            className="form-control"
            id="confirmPassword"
            placeholder="Password"
          />
        </div>

        {/* <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

Signup.propTypes = {};

export default Signup;
