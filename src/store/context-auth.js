import React, { useState, useCallback } from "react";
import axios from "axios";

export const ContextAuth = React.createContext({
  buttonDisabled: false,
  setButtonDisabled: () => {},
  setValidation: () => {},
  vadalidation: {},
  formSubmitHandler: () => {},
  formIsValid: false,
  setResetInputValue: () => {},
});

export default function ContextAuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  ////////////////////////////////
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
  const [inputValue, setInputValue] = useState({
    fullname: "",
    phonenumber: "",
    email: "",
    country: "",
    investFrom: "",
    investTo: "",
  });

  ////////////////////////////////

  const formSubmitHandler = useCallback(async () => {
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

    //axios submit POST request //Future
    try {
      setLoading(true);
      const { data } = await axios.post(
        "https://user-onboarding-backend.herokuapp.com/info-users",
        inputValue
      );

      console.log(data);
    } catch (e) {
      setError(e);
    }

    setLoading(false);
  }, [validation, inputValue]);

  const contextValue = {
    buttonDisabled,
    setButtonDisabled,
    setValidation,
    validation,
    formSubmitHandler,
    setInputValue,
    error, // to put on button to pages
    loading, // to put on button to pages
  };

  return (
    <ContextAuth.Provider value={contextValue}>{children}</ContextAuth.Provider>
  );
}
