import React from "react";
import "./styles.css";

export default function(props) {
  console.log(props);
  return (
    <div className="input-field">
      <label>{props.label}</label>
      <input name={props.name} type={props.type} onChange={props.onChange} />
    </div>
  );
}
