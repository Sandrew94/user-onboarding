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

  const formSubmitHandler = useCallback(() => {
    if (
      !validation.fullNameValidate ||
      !validation.phoneValidate ||
      !validation.emailValidate ||
      !validation.countryValidate
    ) {
      return;
    }

    if (!validation.ToInputIsValid && !validation.FromInputIsValid) {
      return;
    }

    console.log("form");
    //axios submit POST request //Future //Need to install it
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
  };

  return (
    <ContextAuth.Provider value={contextValue}>{children}</ContextAuth.Provider>
  );
}
