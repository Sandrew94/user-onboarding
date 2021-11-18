import React, { useEffect, useContext } from "react";
import FullNamePhoneInput from "./Input/FullNamePhoneInput";
import EmailInput from "./Input/EmailInput";
import CountryInput from "./Input/CountryInput";
import { ContextAuth } from "../../../../store/context-auth";

export default function ContactFormInput() {
  //Context Auth
  const { setButtonDisabled, setForm, formSubmitHandler, formIsValid } =
    useContext(ContextAuth);

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
