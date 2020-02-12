import React from "react";
import "./styles.css";

export default function(props) {
  return (
    <div className="input-field">
      <label>{props.label}</label>
      <select name={props.name} onChange={props.onChange}>
        {props.children}
      </select>
    </div>
  );
}
