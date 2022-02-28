import React, { useState } from "react";

export default function PoppedForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  async function usrFunc() {
    let usrName = await document.getElementById("name").value;
    let setnam = await usrName;

    let usrEmail = await document.getElementById("email").value;
    let setemai = await usrEmail;

    let usrPhone = document.getElementById("phone").value;
    let setphon = await usrPhone;

    let usrAddress = document.getElementById("address").value;
    let setaddres = await usrAddress;

    return console.log(setnam, setemai, setphon, setaddres);
  }

  return (
    <form className="usr-contact">
      <input className="name" placeholder="Name" />
      <input className="email" placeholder="Email" />
      <input className="phone" placeholder="Phone" />
      <input className="address" placeholder="Address" />
      <div className="pop-btns">
        <input
          className="pop-back-btn popper-btn"
          type="button"
          value="Back"
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
  );
}
