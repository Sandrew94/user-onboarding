import React, { useEffect } from "react";
import useInput from "../../../../hooks/use-input";
import validateInput from "../../../../utils/validateInput";
import { LabelWrapper, SpanText, InputStyle } from "../InvestmentPlans.style";

export default function FromInput({ setValidation, dataInput, setDataInput }) {
  //From-Input
  const {
    value: FromInputEntered,
    valueFrom: saveFromInputValue,
    isValid: FromInputIsValid,
    hasError: FromInputError,
    inputClickHandler: FromInputClickHandler,
    click: FromInputClick,
    valueChangeHandler: FromInputChangeHandler,
    inputBlurHandler: FromInputBlurHandler,
  } = useInput((value) => {
    const inputValidNumber = {
      value: value,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
      minValue: 9999,
    };

    return validateInput(inputValidNumber);
  });

  useEffect(() => {
    const validate = (prevValue) => {
      return {
        ...prevValue,
        FromInputIsValid: FromInputIsValid,
      };
    };

    setValidation(validate);

    //Pass data to progressBar

    let passData = (prevDataInput) => {
      return {
        ...prevDataInput,
        fromInput: FromInputEntered,
      };
    };

    setDataInput(passData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, FromInputIsValid, setDataInput, FromInputEntered]);

  ////////////////////////////////////////////////////////////////////////////////

  //Take data from localStorage

  const dataFromLocalStorage = {
    From: JSON.parse(localStorage.getItem("From")) || "",
  };

  const { isValid: localStorageFromIsValid } = useInput(() => {
    const inputValidNumber = {
      value: dataFromLocalStorage.From,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
      minValue: 9999,
    };

    return validateInput(inputValidNumber);
  });

  //2 Validate data from localStorage when page reload

  useEffect(() => {
    const validateInputs = (prevValue) => {
      return {
        ...prevValue,
        FromInputIsValid: localStorageFromIsValid,
      };
    };

    setValidation(validateInputs);

    /////////////////////////////////

    let passData = (prevDataInput) => {
      return {
        ...prevDataInput,
        fromInput: dataFromLocalStorage.From,
      };
    };

    setDataInput(passData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Click color
  const fromInputSpan = FromInputClick ? "#35A0EE" : "#a4aeb4";

  //Error color
  const formInputError = FromInputError ? "red" : "#D5D9DC";

  ////////////////////////////////////////////////////////////////
  return (
    <LabelWrapper>
      <SpanText clickedColor={fromInputSpan}>From</SpanText>
      <InputStyle
        type="text"
        name="From"
        value={saveFromInputValue}
        onChange={FromInputChangeHandler}
        onBlur={FromInputBlurHandler}
        onClick={FromInputClickHandler}
        borderColor={formInputError}
      />
      {FromInputError && <p> - Enter a valid Number</p>}
    </LabelWrapper>
  );
}
