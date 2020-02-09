import React from "react";
import "./styles.css";

export default function(props) {
  return (
    <div className="input-field">
      <label>{props.label}</label>
      <input name={props.name} type={props.type} />
    </div>
  );
}
