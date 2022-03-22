import React from "react";

export default function PoppedForm(props) {
  return (
    <div>
      <input
        id="name"
        placeholder="Name"
        value={props.name}
        onChange={({ target }) => {
          props.setName(target.value);
        }}
      />
      <input
        id="email"
        placeholder="Email"
        value={props.email}
        onChange={({ target }) => {
          props.setEmail(target.value);
        }}
      />
      <input
        id="phone"
        placeholder="Phone"
        value={props.phone}
        onChange={({ target }) => {
          props.setPhone(target.value);
        }}
      />
      <input
        id="address"
        placeholder="Location of Shoot"
        value={props.address}
        onChange={({ target }) => {
          props.setAddress(target.value);
        }}
      />
    </div>
  );
}
