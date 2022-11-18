import React from "react";

export default function Btn(props) {
  return (
    <div>
      <button onClick={props.handleClick} className="btn-create">
        Create account
      </button>
    </div>
  );
}
