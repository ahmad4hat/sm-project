import React from "react";
import DefaultPicture from "./d.png";
import Scss from "./Profile.module.scss";

const Profile = (props) => {
  return (
    <section className={"mt-5 "}>
      <div className="container">
        <div className="row">
          <div className="profilePictureAndName col-12 col-md-4  m-2 shadow-sm p-2 d-flex flex-column justify-content-center align-items-center rounded-lg ">
            <div className={`${Scss.ImgWrap} mb-2`}>
              <img src={DefaultPicture} alt="profile  img" />
            </div>
            <h3 className="lead">Ahmad,Farhat</h3>
          </div>
          <div
            className={
              "profile Discription col-12 col-md-7  m-2 shadow-sm p2 rounded-lg "
            }
          >
            profile description
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
