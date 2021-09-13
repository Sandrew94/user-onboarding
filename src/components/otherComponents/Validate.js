import React from "react";

export default function Validate({ validateInput }) {
  const emptySpace = validateInput.value.toString().trim().length !== 0;

  //////////// max length
  if (validateInput.value.length >= validateInput.maxLength) {
    return (
      <div> - Max length allowed is {validateInput.maxLength} character</div>
    );
  }

  ///// allow numbers

  if (
    !validateInput.allowNumber &&
    !isNaN(parseFloat(validateInput.value)) &&
    isFinite(+validateInput.value)
  ) {
    return <div> - Numbers doen't allowed </div>;
  }

  /////// strings doens't allowed

  if (
    !validateInput.allowStrings &&
    emptySpace &&
    isNaN(parseFloat(validateInput.value))
  ) {
    return <div> - Strings doen't allowed </div>;
  }

  ///// allow email addresses

  if (
    !validateInput.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) &&
    validateInput.allowEmail &&
    emptySpace
  ) {
    return <div> - Not a valid email</div>;
  }

  return <> </>;
}
