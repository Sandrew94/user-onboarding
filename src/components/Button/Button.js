import React from "react";
import { BtnStyle } from "./Button.style.js";

export default function Button(props) {
  return (
    <BtnStyle
      type={props.type || "BtnStyle"}
      className={`${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
      backToHomepage={props.backToHomepage}
      skipForNow={props.skipForNow}
      nextStep={props.nextStep}
      backgroundColorDisabled={props.backgroundColorDisabled}
    >
      {props.children}
    </BtnStyle>
  );
}
