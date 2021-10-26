import React, { useEffect } from "react";
import useInput from "../../../../../hooks/use-input";
import validateInput from "../../../../../utils/validateInput";
import {
  WrapperEmailCountry,
  InputSelect,
  EmailCountrySpanDescription,
} from "../ContactFormInput.style";

export default function CountryInput({ setValidation, prevValid }) {
  //COUNTRY INPUT

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

  useEffect(() => {
    let validateInputs = {
      ...prevValid,
      countryValidate: enteredCountryIsValid,
    };

    setValidation(validateInputs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setValidation, enteredCountryIsValid]);

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
