import React from "react";
import contactImg from "../imgs/contact-photographer.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div className="contact-bullet-points">
        <div className="bullet-point-group">
          <div className="text">888-888-8888</div>
        </div>

        <div className="bullet-point-group">
          <div className="text">test@test.example</div>
        </div>

        <div className="bullet-point-group">
          <div className="text">UT</div>
        </div>
      </div>
      <img src={contactImg} />
    </div>
  );
}
