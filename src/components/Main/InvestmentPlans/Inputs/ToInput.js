import React, { useEffect, useContext } from "react";
import useInput from "../../../../hooks/use-input";
import validateInput from "../../../../utils/validateInput";

import { LabelWrapper, SpanText, InputStyle } from "../InvestmentPlans.style";
import { ContextAuth } from "../../../../store/context-auth";

export default function ToInput({ setDataInput }) {
  //To-Input
  const {
    value: ToInputEntered,
    valueTo: saveToInputValue,
    isValid: ToInputIsValid,
    hasError: ToInputHasError,
    inputClickHandler: ToInputClickHandler,
    click: ToInputClick,
    valueChangeHandler: ToInputChangeHandler,
    inputBlurHandler: ToInputBlurHandler,
  } = useInput((value) => {
    const inputValidNumber = {
      value: value,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
    };

    return validateInput(inputValidNumber);
  });

  ///Context Auth

  const { setValidation, setInputValue } = useContext(ContextAuth);

  /////////////////////////////////

  useEffect(() => {
    const validate = (prevValue) => {
      return { ...prevValue, ToInputIsValid: ToInputIsValid };
    };

    setValidation(validate);

    const passData = (prevDataInput) => {
      return {
        ...prevDataInput,
        toInput: ToInputEntered,
      };
    };

    setDataInput(passData);

    ////

    const valueToSubmit = (prevValue) => {
      return {
        ...prevValue,
        investTo: dataFromLocalStorage.To,
      };
    };

    setInputValue(valueToSubmit);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, ToInputIsValid, setDataInput, ToInputEntered]);

  ////////////////////////////////////////////////////////////////////////////////

  //Take data from localStorage

  const dataFromLocalStorage = {
    To: JSON.parse(localStorage.getItem("To")) || "",
  };

  const { isValid: localStorageToIsValid } = useInput(() => {
    const inputValidNumber = {
      value: dataFromLocalStorage.To,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
    };

    return validateInput(inputValidNumber);
  });

  //2 Validate data from localStorage when page reload

  useEffect(() => {
    const validate = (prevValue) => {
      return {
        ...prevValue,
        ToInputIsValid: localStorageToIsValid,
      };
    };

    setValidation(validate);

    /////////////////////////////////

    const passData = (prevDataInput) => {
      return {
        ...prevDataInput,
        toInput: dataFromLocalStorage.To,
      };
    };

    setDataInput(passData);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Click color
  const toInputSpan = ToInputClick ? "#35A0EE" : "#a4aeb4";

  //Error color
  const toInputError = ToInputHasError ? "red" : "#D5D9DC";

  return (
    <LabelWrapper>
      <SpanText clickedColor={toInputSpan}>To</SpanText>
      <InputStyle
        type="text"
        name="To"
        value={saveToInputValue}
        onChange={ToInputChangeHandler}
        onBlur={ToInputBlurHandler}
        onClick={ToInputClickHandler}
        borderColor={toInputError}
      />
      {ToInputHasError && <p> - Enter a valid Number</p>}
    </LabelWrapper>
  );
}
