import React, { useState } from "react";
import PopPop from "react-poppop";

export default function Login() {
  const [showPop, setShowPop] = useState(true);
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [authAdminUser, setAuthAdminUser] = useState("");
  const [authAdminPsswrd, setAuthAdminPsswrd] = useState("");

  function submitLogin() {
    checkLoginStatus();
  }

  function checkLoginStatus() {
    let authLogger = {
      authAdminUser: authAdminUser,
      authAdminPsswrd: authAdminPsswrd,
    };
    // fetch(`https://mjs-capstone-project-backend.herokuapp.com/auth`, {
    fetch(`http://127.0.0.1:5000/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(authLogger),
    })
      .then((response) => {
        const text = response.text();
        if (response.ok) {
          return text;
        } else {
          throw Error(text);
        }
      })
      .then((response) => {
        const loggedIn = response;

        if (loggedIn === "true") {
          setLoggedInStatus(true);
          setShowPop(false);
        } else {
          setLoggedInStatus(false);
        }
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }

  return (
    <div>
      <PopPop
        position="centerCenter"
        open={showPop}
        closeBtn={true}
        closeOnEsc={true}
        onClose={() => {
          setShowPop(false);
        }}
        closeOnOverlay={true}
      >
        <div className="login-poppop">
          <div className="login-forms">
            <div>
              <h2>Please log in with Admin Credentials.</h2>
              <input
                id="username"
                placeholder="Username"
                value={authAdminUser}
                onChange={({ target }) => {
                  setAuthAdminUser(target.value);
                }}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={authAdminPsswrd}
                onChange={({ target }) => {
                  setAuthAdminPsswrd(target.value);
                }}
              />
              <input
                className="pop-submit-btn popper-btn"
                type="button"
                value="Login"
                onClick={() => {
                  submitLogin();
                }}
              />
            </div>
          </div>
        </div>
      </PopPop>
      {loggedInStatus ? <div>true</div> : null}
    </div>
  );
}
