import React, { useState, useCallback } from "react";

export const ContextAuth = React.createContext({
  form: () => {},
  setForm: () => {},
  buttonDisabled: false,
  setButtonDisabled: () => {},
  setValidation: () => {},
  vadalidation: {},
  formSubmitHandler: () => {},
  formIsValid: false,
});

export default function ContextAuthProvider({ children }) {
  const [form, setForm] = useState("");
  const [buttonDisabled, setButtonDisabled] = useState(false);

  ////////////////////////////////
  const [validation, setValidation] = useState({
    fullNameValidate: false,
    phoneValidate: false,
    emailValidate: false,
    countryValidate: false,
    ToInputIsValid: false,
    FromInputIsValid: false,
    buttonState: false,
  });

  ////////////////////////////////

  //Form validation

  let formIsValid = false;
  if (
    (validation.fullNameValidate &&
      validation.phoneValidate &&
      validation.emailValidate &&
      validation.countryValidate) ||
    (validation.ToInputIsValid &&
      validation.FromInputIsValid &&
      validation.buttonState)
  ) {
    formIsValid = true; // i use this for the button state, disabled or not
  }

  const formSubmitHandler = useCallback(() => {
    if (
      !validation.fullNameValidate ||
      !validation.phoneValidate ||
      !validation.emailValidate ||
      !validation.countryValidate ||
      (!validation.ToInputIsValid && !validation.FromInputIsValid)
    ) {
      return;
    }

    console.log("form");
    //axios submit POST request //Future
  }, [validation]);

  //////

  const contextValue = {
    form,
    setForm,
    buttonDisabled,
    setButtonDisabled,
    setValidation,
    validation,
    formSubmitHandler,
    formIsValid,
  };

  return (
    <ContextAuth.Provider value={contextValue}>{children}</ContextAuth.Provider>
  );
}
