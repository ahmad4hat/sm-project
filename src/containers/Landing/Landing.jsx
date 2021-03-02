import React from "react";
// import PropTypes from 'prop-types'
import Scss from "./Landing.module.scss";

const Landing = (props) => {
  return (
    <div
      className={`d-flex justify-content-center align-items-center ${Scss.Landing}`}
      style={{ height: "95vh" }}
    >
      <div className="jumbotron container">
        <h1 className="display-1 font-weight-bold ">
          Join the tracking free social media
        </h1>
        <p className="lead">
          We are trying to provide you the basic service of social media without
          any tracking
        </p>

        <p className="lead">
          <a className="btn btn-primary btn-lg mx-2" href="#" role="button">
            Sign Up
          </a>
          <a className="btn btn-dark btn-lg mx-2" href="#" role="button">
            Log In
          </a>
        </p>
      </div>
    </div>
  );
};

// Landing.propTypes = {

// }

export default Landing;
