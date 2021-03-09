import React from "react";
// import PropTypes from 'prop-types'
import Scss from "./Landing.module.scss";
import { useHistory } from "react-router-dom";

const Landing = (props) => {
  const history = useHistory();

  return (
    <section
      className={`d-flex justify-content-center align-items-center ${Scss.Landing}`}
      style={{ height: "95vh" }}
    >
      <div className="jumbotron container">
        <h1 className="font-weight-bold display-1  ">
          Join the tracking free social media.
        </h1>
        <p className="lead">
          We are trying to provide you the basic service of social media without
          any tracking.
        </p>

        <p className="lead">
          <button
            className="btn btn-primary btn-lg mx-2"
            onClick={() => history.push("/signup")}
          >
            Sign Up
          </button>
          <button
            className="btn btn-dark btn-lg mx-2"
            onClick={() => history.push("/login")}
          >
            Log In
          </button>
        </p>
      </div>
    </section>
  );
};

// Landing.propTypes = {

// }

export default Landing;
