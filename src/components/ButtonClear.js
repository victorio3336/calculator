import React from "react";
import "../style-sheets/ButtonClear.css";

const ButtonClear = (props) => (
  <div className="button-clear" onClick={props.driveClear}>
    {props.children}
  </div>
);

export default ButtonClear;
