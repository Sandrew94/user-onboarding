import React, { useState, useEffect } from "react";
import {
  ButtonWrapper,
  ButtonLabel,
  SpanCheckmark,
  InputRadio,
} from "../InvestmentPlans.style";

export default function ButtonRadio({ setValidation, validation }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [buttonState, setButtonState] = useState(false);

  const handleOnClick = (name, index) => {
    if (name === "button") setActiveIndex(index);
  };
  const box = ["Yes", "No"];

  const boxSelector = box.map((el, idx) => {
    const activeButton = activeIndex === idx ? "activeFirst" : "#d5d9dc";

    const activeCheckmark = activeIndex === idx ? "#35a0ee" : "";
    return (
      <ButtonLabel key={idx} active={activeButton}>
        <InputRadio
          type="radio"
          name="radio"
          onClick={() => {
            setButtonState(true);
            handleOnClick("button", idx);
          }}
        />
        <SpanCheckmark clickedColor={activeCheckmark}>{el}</SpanCheckmark>
      </ButtonLabel>
    );
  });

  useEffect(() => {
    let validate = {
      ...validation,
      buttonState: buttonState,
    };

    setValidation(validate);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, buttonState]);
  return <ButtonWrapper>{boxSelector}</ButtonWrapper>;
}
