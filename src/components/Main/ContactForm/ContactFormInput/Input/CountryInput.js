import React, { useEffect, useContext } from "react";
import useInput from "../../../../../hooks/use-input";
import validateInput from "../../../../../utils/validateInput";
import {
  WrapperEmailCountry,
  InputSelect,
  EmailCountrySpanDescription,
} from "../ContactFormInput.style";
import { ContextAuth } from "../../../../../store/context-auth";

export default function CountryInput() {
  const {
    valueCountry: storeCountryData,
    isValid: enteredCountryIsValid,
    hasError: countryHasError,
    valueChangeHandler: countryChangeHandler,
    inputBlurHandler: countryBlurHandler,
    inputClickHandler: countryClickHandler,
    click: countryClickClasses,
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

  const { setValidation } = useContext(ContextAuth);

  //1 Validate input's from user Input
  useEffect(() => {
    let validateInputs = (prevValue) => {
      return {
        ...prevValue,
        countryValidate: enteredCountryIsValid,
      };
    };

    setValidation(validateInputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, enteredCountryIsValid]);

  ////////////////////////////////////////////////////////////////////////////////

  //Take data from localStorage

  const dataFromLocalStorage = {
    country: JSON.parse(localStorage.getItem("country")) || "",
  };

  const { isValid: localStorageCountryIsValid } = useInput(() => {
    const inputValidCountry = {
      value: dataFromLocalStorage.country,
      maxLength: 14,
      whiteSpace: true,
      allowNumber: false,
      allowStrings: true,
    };

    return validateInput(inputValidCountry);
  });

  //2 Validate data from LocalStorage

  useEffect(() => {
    let validateInputs = (prevValue) => {
      return {
        ...prevValue,
        countryValidate: localStorageCountryIsValid,
      };
    };

    setValidation(validateInputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //COUNTRY
  const borderColorCountry = countryHasError ? `rgb(245, 2, 2)` : `#d5d9dc`;

  const clickedColorCountry = countryClickClasses ? "#2696e8" : "#a4aeb4";

  return (
    <WrapperEmailCountry className="padding-top-mid">
      <EmailCountrySpanDescription clickedColor={clickedColorCountry}>
        Country
      </EmailCountrySpanDescription>
      <label htmlFor="country">
        <InputSelect
          type="text"
          name="country"
          borderColor={borderColorCountry}
          value={storeCountryData}
          onChange={countryChangeHandler}
          onBlur={countryBlurHandler}
          onClick={countryClickHandler}
        >
          <option value=""></option>
          <option value="italy">Italia</option>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </InputSelect>
        {countryHasError && <p> - Enter a valid Country name</p>}
      </label>
    </WrapperEmailCountry>
  );
}
