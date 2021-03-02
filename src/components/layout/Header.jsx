import React from "react";

const header = () => {
  let signinOption = (
    <ul className="navbar-nav ml-4">
      <li className="nav-item">
        <a className="nav-link" to="/register">
          Sign Up
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" to="/login">
          Login
        </a>
      </li>
    </ul>
  );
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="">
            SM project
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <div className="navbar-nav ">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
            </div>
            {signinOption}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default header;
