import React, { useEffect, useContext } from "react";
import FullNamePhoneInput from "./Input/FullNamePhoneInput";
import EmailInput from "./Input/EmailInput";
import CountryInput from "./Input/CountryInput";
import { ContextAuth } from "../../../../store/context-auth";

export default function ContactFormInput() {
  //Context Auth
  const { setButtonDisabled, setForm, formSubmitHandler, validation } =
    useContext(ContextAuth);

  let formIsValid = false;
  if (
    validation.fullNameValidate &&
    validation.phoneValidate &&
    validation.emailValidate &&
    validation.countryValidate
  ) {
    formIsValid = true; // i use this for the button state, disabled or not
  }

  useEffect(() => {
    setForm(formSubmitHandler);
    setButtonDisabled(formIsValid);
  }, [setButtonDisabled, formIsValid, setForm, formSubmitHandler]);

  return (
    <>
      <FullNamePhoneInput />
      <EmailInput />
      <CountryInput />
    </>
  );
}
