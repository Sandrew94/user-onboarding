import React, { useEffect, useCallback, useState } from "react";
import FullNamePhoneInput from "./Input/FullNamePhoneInput";
import EmailInput from "./Input/EmailInput";
import CountryInput from "./Input/CountryInput";

export default function ContactFormInput({ setButtonDisabled, setForm }) {
  const [validation, setValidation] = useState({
    fullNameValidate: false,
    phoneValidate: false,
    emailValidate: false,
    countryValidate: false,
  });

  //form validation
  let formIsValid = false;
  if (
    validation.fullNameValidate &&
    validation.phoneValidate &&
    validation.emailValidate &&
    validation.countryValidate
  ) {
    formIsValid = true;
  }

  //form handler

  const formSubmitHandler = useCallback(() => {
    console.log("form");
    if (
      !validation.fullNameValidate ||
      !validation.phoneValidate ||
      !validation.emailValidate ||
      !validation.countryValidate
    ) {
      return;
    }
  }, [
    validation.fullNameValidate,
    validation.phoneValidate,
    validation.emailValidate,
    validation.countryValidate,
  ]);

  useEffect(() => {
    setForm(() => formSubmitHandler);
    setButtonDisabled(formIsValid);
  }, [setButtonDisabled, formIsValid, setForm, formSubmitHandler]);

  return (
    <>
      <FullNamePhoneInput setValidation={setValidation} />
      <EmailInput setValidation={setValidation} />
      <CountryInput setValidation={setValidation} />
    </>
  );
}
