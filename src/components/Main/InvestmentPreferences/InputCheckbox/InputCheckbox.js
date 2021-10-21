import React from "react";
import { LabelStyle, InputStyle, TextSpanStyle } from "./InputCheckbox.style";

export default function InputCheckbox({
  text,
  htmlFor,
  id,
  onChange,
  checked,
  name,
  value,
  activeLabel,
  activeCheckbox,
  activeLabelBackground,
  activeSpanColor,
}) {
  return (
    <LabelStyle
      htmlFor={htmlFor}
      activeLabel={activeLabel}
      activeLabelBackground={activeLabelBackground}
    >
      <InputStyle
        type="checkbox"
        name={name}
        value={value}
        id={id}
        onChange={onChange}
        checked={checked}
        activeCheckbox={activeCheckbox}
      />
      <TextSpanStyle activeSpanColor={activeSpanColor}>{text}</TextSpanStyle>
    </LabelStyle>
  );
}
