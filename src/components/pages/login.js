import React, { useState } from "react";
import PopPop from "react-poppop";
import AdminView from "./admin-view";

export default function Login() {
  const [showPop, setShowPop] = useState(true);
  const [loggedInStatus, setLoggedInStatus] = useState(false);
  const [authAdminUser, setAuthAdminUser] = useState("");
  const [authAdminPsswrd, setAuthAdminPsswrd] = useState("");
  const [loginError, setLoginError] = useState(false);

  function submitLogin() {
    checkLoginStatus();
  }

  function checkLoginStatus() {
    let authLogger = {
      authAdminUser: authAdminUser,
      authAdminPsswrd: authAdminPsswrd,
    };
    fetch(`https://mjs-capstone-project-backend.herokuapp.com/auth`, {
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
          setLoginError(true);
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
              {loginError ? (
                <div>
                  You have entered incorrect credentials, please try again.
                </div>
              ) : null}
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
      {loggedInStatus ? (
        <div>
          <AdminView />
        </div>
      ) : null}
    </div>
  );
}
