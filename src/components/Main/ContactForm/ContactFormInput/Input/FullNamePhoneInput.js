import React, { useEffect } from "react";
import useInput from "../../../../../hooks/use-input";
import validateInput from "../../../../../utils/validateInput";
import {
  WrapperNamePhone,
  LabelNamePhone,
  SpanInputDescription,
  InputStyle,
} from "../ContactFormInput.style";

export default function FullNamePhoneInput({ setValidation }) {
  //FullName Input
  const {
    value: fullNameEntered,
    isValid: enteredFullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    inputClickHandler: fullNameClickHandler,
    click: fullNameClickClasses,
  } = useInput((value) => {
    const inputValidFullName = {
      value: value,
      maxLength: 20,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
    };

    return validateInput(inputValidFullName);
  });

  //Phone numbers input
  const {
    value: phoneEntered,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
  } = useInput((value) => {
    const inputValidPhone = {
      value: value,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
    };

    return validateInput(inputValidPhone);
  });

  useEffect(() => {
    let validateInputs = {
      fullNameValidate: enteredFullNameIsValid,
      phoneValidate: enteredPhoneIsValid,
    };

    setValidation(validateInputs);
  }, [enteredFullNameIsValid, enteredPhoneIsValid, setValidation]);

  //FUll NAME
  const borderColorFullName = fullNameHasError ? `rgb(245, 2, 2)` : `#d5d9dc`;

  const clickedColor = fullNameClickClasses ? "#2696e8" : "#a4aeb4";

  //PHONE NUMBERS
  const borderColorPhone = phoneHasError ? `rgb(245, 2, 2)` : `#d5d9dc`;

  return (
    <WrapperNamePhone className={`padding-top-mid`}>
      <LabelNamePhone htmlFor="full-name">
        <SpanInputDescription clickedColor={clickedColor}>
          Full name
        </SpanInputDescription>
        <InputStyle
          type="text"
          name="full-name"
          id="full-name"
          borderColor={borderColorFullName}
          value={fullNameEntered}
          onChange={fullNameChangeHandler}
          onBlur={fullNameBlurHandler}
          onClick={fullNameClickHandler}
        />
        {fullNameHasError && <p> - Enter a valid Full Name</p>}
      </LabelNamePhone>
      <LabelNamePhone htmlFor="phoneNumber">
        <InputStyle
          placeholder="Enter a valid phone number"
          type="text"
          name="phoneNumber"
          borderColor={borderColorPhone}
          value={phoneEntered}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneHasError && <p> - Enter a valid Phone Number</p>}
      </LabelNamePhone>
    </WrapperNamePhone>
  );
}
