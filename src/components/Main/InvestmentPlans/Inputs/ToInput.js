import React, { useEffect } from "react";
import useInput from "../../../../hooks/use-input";
import validateInput from "../../../../utils/validateInput";

import { LabelWrapper, SpanText, InputStyle } from "../InvestmentPlans.style";

export default function ToInput({
  setValidation,
  validation,
  dataInput,
  setDataInput,
}) {
  //To-Input
  const {
    value: ToInputEntered,
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

  useEffect(() => {
    let validate = {
      ...validation,
      ToInputIsValid: ToInputIsValid,
    };

    setValidation(validate);

    let passData = {
      ...dataInput,
      toInput: ToInputEntered,
    };

    setDataInput(passData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, ToInputIsValid, setDataInput, ToInputEntered]);

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
        value={ToInputEntered}
        onChange={ToInputChangeHandler}
        onBlur={ToInputBlurHandler}
        onClick={ToInputClickHandler}
        borderColor={toInputError}
      />
      {ToInputHasError && <p> - Enter a valid Number</p>}
    </LabelWrapper>
  );
}
