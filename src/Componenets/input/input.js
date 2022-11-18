import React from "react";
import Btn from "../BTN/btn";
import "../input/form.css";

export default function Input(props) {
  return (
    <div className="input-div">
      <input placeholder="Name" type="text" onChange={props.handleName} />
      <input placeholder="Email" type="email" onChange={props.handleEmail} />
      <input
        placeholder="Password"
        type="password"
        onChange={props.handlePassword}
      />
      <Btn handleClick={props.handleClick} />
    </div>
  );
}
