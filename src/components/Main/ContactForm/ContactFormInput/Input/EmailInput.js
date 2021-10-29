import React, { useEffect } from "react";
import useInput from "../../../../../hooks/use-input";
import validateInput from "../../../../../utils/validateInput";
import {
  WrapperEmailCountry,
  InputStyle,
  EmailCountrySpanDescription,
} from "../ContactFormInput.style";

export default function EmailInput({ setValidation }) {
  //EMAIL INPUT

  const {
    valueEmail: storeEmailData,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputClickHandler: emailClickHandler,
    click: emailClickClasses,
  } = useInput((value) => {
    const inputValidEmail = {
      value: value,
      maxLength: 254,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
      allowEmail: true,
    };

    return validateInput(inputValidEmail);
  });

  // 1- Validation when the user Input some value in the email field

  useEffect(() => {
    let validateInputs = (prevValue) => {
      return {
        ...prevValue,
        emailValidate: enteredEmailIsValid,
      };
    };

    setValidation(validateInputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enteredEmailIsValid, setValidation]);

  ////////////////////////////////////////////////////////////////////////////////

  //Take data from localStorage

  const dataFromLocalStorage = {
    email: JSON.parse(localStorage.getItem("email")) || "",
  };

  const { isValid: localStorageEmailIsValid } = useInput(() => {
    const inputValidEmail = {
      value: dataFromLocalStorage.email,
      maxLength: 254,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
      allowEmail: true,
    };

    return validateInput(inputValidEmail);
  });

  //2 Validate data from localStorage

  useEffect(() => {
    let validateInputs = (prevValue) => {
      return {
        ...prevValue,
        emailValidate: localStorageEmailIsValid,
      };
    };

    setValidation(validateInputs);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //EMAIL
  const borderColorEmail = emailHasError ? `rgb(245, 2, 2)` : `#d5d9dc`;

  const clickedColorEmail = emailClickClasses ? "#2696e8" : "#a4aeb4";

  return (
    <WrapperEmailCountry className="padding-top-mid">
      <EmailCountrySpanDescription clickedColor={clickedColorEmail}>
        E-mail address
      </EmailCountrySpanDescription>
      <label htmlFor="email">
        <InputStyle
          type="email"
          name="email"
          borderColor={borderColorEmail}
          value={storeEmailData}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          onClick={emailClickHandler}
        />
        {emailHasError && <p> - Enter a valid E-Mail address</p>}
      </label>
    </WrapperEmailCountry>
  );
}
