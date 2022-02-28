import React, { useState } from "react";
import PoppedForm from "./poppedForm";

export default function Popped(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

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
      <PoppedForm />
    </div>
  );
}
