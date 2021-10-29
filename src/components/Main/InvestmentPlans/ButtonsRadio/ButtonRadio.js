import React, { useState, useEffect } from "react";
import {
  ButtonWrapper,
  ButtonLabel,
  SpanCheckmark,
  InputRadio,
} from "../InvestmentPlans.style";

export default function ButtonRadio({ setValidation }) {
  const [activeIndex, setActiveIndex] = useState(
    JSON.parse(localStorage.getItem("radio")) || 0
  );
  const [buttonState, setButtonState] = useState(
    JSON.parse(localStorage.getItem("checkboxAccreditInvest")) || false
  );

  const handleOnClick = (event, index) => {
    setActiveIndex(index);
    localStorage.setItem(event.target.name, JSON.stringify(index));
  };
  const box = ["Yes", "No"];

  const boxSelector = box.map((el, idx) => {
    const activeButton = activeIndex === idx ? "activeFirst" : "#d5d9dc";
    const activeCheckmark = activeIndex === idx ? "#35a0ee" : "";

    localStorage.setItem("activeButton", JSON.stringify(activeButton));
    localStorage.setItem("activeCheckmark", JSON.stringify(activeCheckmark));

    return (
      <ButtonLabel
        key={idx}
        active={JSON.parse(localStorage.getItem("activeButton"))}
      >
        <InputRadio
          type="radio"
          name="radio"
          onClick={(event) => {
            setButtonState(true);
            handleOnClick(event, idx);
          }}
        />
        <SpanCheckmark
          clickedColor={JSON.parse(localStorage.getItem("activeCheckmark"))}
        >
          {el}
        </SpanCheckmark>
      </ButtonLabel>
    );
  });

  useEffect(() => {
    const validate = (prevValue) => {
      return {
        ...prevValue,
        buttonState: buttonState,
      };
    };

    setValidation(validate);

    localStorage.setItem("checkboxAccreditInvest", JSON.stringify(buttonState));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, buttonState]);

  return <ButtonWrapper>{boxSelector}</ButtonWrapper>;
}
