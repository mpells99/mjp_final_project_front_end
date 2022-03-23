import React, { useState } from "react";
import PoppedForm from "./popped-form";

export default function Popped(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit() {
    setSubmitted(true);
  }

  function poster(props) {
    let postInfo = {
      name: name,
      email: email,
      phone: phone,
      address: address,
      calDateID: props.calDateID,
      calDate: props.calDate,
      calDateOptions: props.calDateOptions,
      booked: "booked",
    };
    fetch(`https://mjs-capstone-project-backend.herokuapp.com/calendar`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(postInfo),
    })
      .then((response) => {
        const text = response.text();
        if (response.ok) {
          return text;
        } else {
          throw Error(text);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  return (
    <div className="poppop-info">
      {submitted ? (
        <div>
          <h2>
            Thank you for booking a photography session on {props.calDate}, from{" "}
            {props.calDateOptions} <br />
            The location of the shoot will be at {address}. <br />
            <div className="grayed">
              Please reach out to me at 888-888-8888 if any of the information
              is wrong.
            </div>
          </h2>
        </div>
      ) : (
        <div>
          <div>
            <h2>{props.calDateOptions}</h2>
          </div>
          <form className="usr-contact">
            <PoppedForm
              name={name}
              email={email}
              phone={phone}
              address={address}
              setName={setName}
              setEmail={setEmail}
              setPhone={setPhone}
              setAddress={setAddress}
            />
            <div className="pop-btns">
              <input
                className="pop-back-btn popper-btn"
                type="button"
                value="Back"
                onClick={props.goBack}
              ></input>
              <input
                className="pop-submit-btn popper-btn"
                type="button"
                value="Book"
                onClick={() => {
                  submit();
                  poster(props);
                }}
              ></input>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
