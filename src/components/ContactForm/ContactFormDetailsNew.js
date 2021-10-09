import React, { useEffect, useCallback } from "react";
import useInput from "../../hooks/use-input";
import classes from "./ContactFormDetails.module.css";
import validateInput from "../utils/validateInput";

export default function ContactFormDetailsNew({ setButtonDisabled, setForm }) {
  //FullName Input
  const {
    value: fullNameEntered,
    isValid: enteredFullNameIsValid,
    hasError: fullNameHasError,
    valueChangeHandler: fullNameChangeHandler,
    inputBlurHandler: fullNameBlurHandler,
    inputClickHandler: fullNameClickHandler,
    click: fullNameClickClasses,
    reset: fullNameReset,
  } = useInput((value) => {
    const inputValidFullName = {
      value: value,
      maxLength: 20,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
    };

    return validateInput(inputValidFullName);
  });

  //////////////////////////////////

  //Phone numbers input
  const {
    value: phoneEntered,
    isValid: enteredPhoneIsValid,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    inputBlurHandler: phoneBlurHandler,
    reset: phoneReset,
  } = useInput((value) => {
    const inputValidPhone = {
      value: value,
      maxLength: 15,
      whiteSpace: true,
      allowNumber: true,
      allowStrings: false,
    };

    return validateInput(inputValidPhone);
  });

  ////////////

  //EMAIL INPUT

  const {
    value: emailEntered,
    isValid: enteredEmailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    inputClickHandler: emailClickHandler,
    click: emailClickClasses,
    reset: emailReset,
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

  ////////////

  //COUNTRY INPUT

  const {
    value: countryEntered,
    isValid: enteredCountryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    inputClickHandler: countryClickHandler,
    click: countryClickClasses,
    reset: countryReset,
  } = useInput((value) => {
    const inputValidCountry = {
      value: value,
      maxLength: 14,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
    };

    return validateInput(inputValidCountry);
  });

  //form validation
  let formIsValid = false;
  if (
    enteredFullNameIsValid &&
    enteredPhoneIsValid &&
    enteredEmailIsValid &&
    enteredCountryIsValid
  ) {
    formIsValid = true; //need to apply to a disabled button property
  }

  //form handler

  const formSubmitHandler = useCallback(
    (event) => {
      //event.preventDefault();
      console.log("form");
      if (
        !enteredFullNameIsValid ||
        !enteredPhoneIsValid ||
        !enteredEmailIsValid ||
        !enteredCountryIsValid
      ) {
        return;
      }

      // fullNameReset();
      // phoneReset();
      // emailReset();
      // countryReset();
    },
    [
      enteredFullNameIsValid,
      enteredPhoneIsValid,
      enteredEmailIsValid,
      enteredCountryIsValid,
    ]
  );

  useEffect(() => {
    setForm(() => formSubmitHandler);
    setButtonDisabled(formIsValid);
  }, [setButtonDisabled, formIsValid, setForm, formSubmitHandler]);

  //classes error handler

  //FUll NAME
  const fullNameErrorClasses = fullNameHasError
    ? `${classes["contact-details__name-phone-input"]} ${classes.error}`
    : `${classes["contact-details__name-phone-input"]}`;

  const fullNameClickSpan = fullNameClickClasses
    ? `contact-details__full-name ${classes.clickSpan}`
    : "contact-details__full-name";

  //PHONE NUMBERS
  const phoneErrorClasses = phoneHasError
    ? `${classes["contact-details__name-phone-input"]} ${classes.error}`
    : `${classes["contact-details__name-phone-input"]}`;

  //EMAIL
  const emailErrorClasses = emailHasError
    ? `${classes["contact-details__input-email-country"]} ${classes.error}`
    : `${classes["contact-details__input-email-country"]}`;

  const emailClickSpan = emailClickClasses
    ? `${classes["contact-details__email-text"]} ${classes.clickSpan}`
    : `${classes["contact-details__email-text"]}`;

  //COUNTRY
  const countryErrorClasses = countryHasError
    ? `${classes["contact-details__input-email-country"]} ${classes.error}`
    : `${classes["contact-details__input-email-country"]}`;

  const countryClickSpan = countryClickClasses
    ? `${classes["contact-details__email-text"]} ${classes.clickSpan}`
    : `${classes["contact-details__email-text"]}`;

  return (
    <>
      <div
        className={`${classes["contact-details__name-phone"]} padding-top-mid`}
      >
        <label
          htmlFor="full-name"
          className={`${classes["contact-details__name-phone-label"]}`}
        >
          <span className={fullNameClickSpan}>Full name</span>
          <input
            type="text"
            name="full-name"
            id="full-name"
            className={fullNameErrorClasses}
            value={fullNameEntered}
            onChange={fullNameChangeHandler}
            onBlur={fullNameBlurHandler}
            onClick={fullNameClickHandler}
          />
          {fullNameHasError && <p> - Enter a valid Full Name</p>}
        </label>
        <label
          htmlFor="phoneNumber"
          className={`${classes["contact-details__name-phone-label"]}`}
        >
          <input
            placeholder="Enter a valid phone number"
            type="text"
            name="phoneNumber"
            className={phoneErrorClasses}
            value={phoneEntered}
            onChange={phoneChangeHandler}
            onBlur={phoneBlurHandler}
          />
          {phoneHasError && <p> - Enter a valid Phone Number</p>}
        </label>
      </div>
      <div className="contact-details__email padding-top-mid">
        <span className={emailClickSpan}>E-mail address</span>
        <label htmlFor="email">
          <input
            type="email"
            name="email"
            className={emailErrorClasses}
            value={emailEntered}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            onClick={emailClickHandler}
          />
          {emailHasError && <p> - Enter a valid E-Mail address</p>}
        </label>
      </div>
      <div className="contact-details__email padding-top-mid">
        <span className={countryClickSpan}>Country</span>
        <label htmlFor="country">
          <select
            type="text"
            name="country"
            className={countryErrorClasses}
            value={countryEntered}
            onChange={countryChangeHandler}
            onBlur={countryBlurHandler}
            onClick={countryClickHandler}
          >
            <option value=""></option>
            <option value="italy">Italia</option>
            <option value="australia">Australia</option>
            <option value="canada">Canada</option>
            <option value="usa">USA</option>
          </select>
          {countryHasError && <p> - Enter a valid Country name</p>}
        </label>
      </div>
    </>
  );
}
