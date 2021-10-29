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
    isValid: enteredFullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    inputClickHandler: fullNameClickHandler,
    click: fullNameClickClasses,
    valueName: fullNameSaveValue,
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
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    valuePhone: phoneSaveValue,
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

  //Two use effect
  //1 Load validation when user Input some values in the field

  useEffect(() => {
    const validateInputs = (prevValue) => {
      return {
        ...prevValue,
        fullNameValidate: enteredFullNameIsValid,
        phoneValidate: enteredPhoneIsValid,
      };
    };

    setValidation(validateInputs);
  }, [
    enteredFullNameIsValid,
    enteredPhoneIsValid,
    setValidation,
    fullNameSaveValue,
    phoneSaveValue,
  ]);

  ////// Load data from localStorage
  const dataFromLocalStorage = {
    fullName: JSON.parse(localStorage.getItem("fullName")) || "",
    phoneNumber: JSON.parse(localStorage.getItem("phoneNumber")) || "",
  };

  const { isValid: localStorageFullNameIsValid } = useInput(() => {
    const inputValidFullName = {
      value: dataFromLocalStorage.fullName,
      maxLength: 20,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
    };

    return validateInput(inputValidFullName);
  });

  const { isValid: localStoragePhoneIsValid } = useInput(() => {
    const inputValidPhone = {
      value: dataFromLocalStorage.phoneNumber,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
    };

    return validateInput(inputValidPhone);
  });

  //2 take the values from localStorage and do the validation with these values, when the pages load!

  useEffect(() => {
    const validateInputs = (prevValue) => {
      return {
        ...prevValue,
        fullNameValidate: localStorageFullNameIsValid,
        phoneValidate: localStoragePhoneIsValid,
      };
    };

    setValidation(validateInputs);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //FUll NAME
  const borderColorFullName = fullNameHasError ? `rgb(245, 2, 2)` : `#d5d9dc`;

  const clickedColor = fullNameClickClasses ? "#2696e8" : "#a4aeb4";

  //PHONE NUMBERS
  const borderColorPhone = phoneHasError ? `rgb(245, 2, 2)` : `#d5d9dc`;

  return (
    <WrapperNamePhone>
      <LabelNamePhone htmlFor="full-name">
        <SpanInputDescription clickedColor={clickedColor}>
          Full name
        </SpanInputDescription>
        <InputStyle
          type="text"
          name="fullName"
          id="full-name"
          borderColor={borderColorFullName}
          value={fullNameSaveValue}
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
          value={phoneSaveValue}
          onChange={phoneChangeHandler}
          onBlur={phoneBlurHandler}
        />
        {phoneHasError && <p> - Enter a valid Phone Number</p>}
      </LabelNamePhone>
    </WrapperNamePhone>
  );
}
