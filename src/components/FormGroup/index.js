import React from "react";

import "./styles.css";

const FormGroup = ({ children }, props) => {
  console.log(props.title);
  return (
    <div>
      {children}
      {props.title}
    </div>
  );
};

export default FormGroup;
