import React from "react";
import "./ShakeButton.css";

function ShakeButton(props) {
  return (
    <div className="wrapperButton" onClick={props.shake}>
      Shake!
    </div>
  );
}

export default ShakeButton;
