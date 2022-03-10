import React, { useState } from "react";
import PoppedForm from "./popped-form";

export default function Popped(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // TODO: Change Class for POPPOP
  //   document.querySelector("body > div:nth-child(5) > div > div:nth-child(2)").className += "pop-color"

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
