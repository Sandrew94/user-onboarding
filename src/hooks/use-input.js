import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState(() => {
    return {
      validateInput: "",
      fullName: JSON.parse(localStorage.getItem("fullName")) || "",
      phoneNumber: JSON.parse(localStorage.getItem("phoneNumber")) || "",
      email: JSON.parse(localStorage.getItem("email")) || "",
      country: JSON.parse(localStorage.getItem("country")) || "",
      From: JSON.parse(localStorage.getItem("From")) || "",
      To: JSON.parse(localStorage.getItem("To")) || "",
    };
  });
  const [isTouched, setIsTouched] = useState(false);
  const [clickClasses, setClickClasses] = useState(false);

  const valueIsValid = validateValue(enteredValue.validateInput);
  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (event) => {
    setEnteredValue({
      [event.target.name]: event.target.value,
      validateInput: event.target.value,
    });

    localStorage.setItem(event.target.name, JSON.stringify(event.target.value));
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
    setClickClasses(false);
  };
  const inputClickHandler = () => {
    setClickClasses(!clickClasses);
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue.validateInput,
    valueName: enteredValue.fullName,
    valuePhone: enteredValue.phoneNumber,
    valueEmail: enteredValue.email,
    valueCountry: enteredValue.country,
    valueFrom: enteredValue.From,
    valueTo: enteredValue.To,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    inputClickHandler,
    click: clickClasses,
    reset,
  };
};

export default useInput;
