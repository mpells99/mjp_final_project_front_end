import React, { useState } from "react";

export default function Popped(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  async function usrFunc() {
    return console.log(name, email, phone, address);
  }

  return (
    <div className="poppop">
      {props.pCalDateID === "1" ? (
        <div>
          <h2>9 AM - 12 PM</h2>
        </div>
      ) : (
        <div>
          <h2>1 PM - 4 PM</h2>
        </div>
      )}
      <form className="usr-contact">
        <input
          id="name"
          placeholder="Name"
          value={name}
          onChange={({ target }) => {
            setName(target.value);
          }}
        />
        <input
          id="email"
          placeholder="Email"
          value={email}
          onChange={({ target }) => {
            setEmail(target.value);
          }}
        />
        <input
          id="phone"
          placeholder="Phone"
          value={phone}
          onChange={({ target }) => {
            setPhone(target.value);
          }}
        />
        <input
          id="address"
          placeholder="Address"
          value={address}
          onChange={({ target }) => {
            setAddress(target.value);
          }}
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
            value="Submit"
            onClick={async () => {
              usrFunc();
            }}
          ></input>
        </div>
      </form>
    </div>
  );
}
