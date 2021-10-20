const validateInput = function (validateInput) {
  let isValid = true;

  //////////// whiteSpace check
  if (validateInput.whiteSpace) {
    isValid = isValid && validateInput.value.toString().trim().length !== 0;
  }

  //////////// max length
  if (
    validateInput.maxLength != null &&
    typeof validateInput.value === "string" &&
    validateInput.value.length >= validateInput.maxLength
  ) {
    isValid = isValid && validateInput.value.length <= validateInput.maxLength;
  }

  ////////// min length

  if (
    validateInput.minLength != null &&
    typeof validateInput.value === "number"
  ) {
    isValid = isValid && validateInput.value.length >= validateInput.minLength;
  }

  ///// allow numbers

  if (
    !validateInput.allowNumber &&
    !isNaN(parseFloat(validateInput.value)) &&
    isFinite(+validateInput.value)
  ) {
    isValid = isValid && false;
  }

  ////

  /////// strings doens't allowed

  if (!validateInput.allowStrings && isNaN(parseFloat(validateInput.value))) {
    isValid = isValid && false;
  }

  ////////////////////////////////

  ///// allow email addresses

  if (
    !validateInput.value.match(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ) &&
    validateInput.allowEmail &&
    validateInput.value.toString().trim().length !== 0
  ) {
    isValid = isValid && false;
  }
  ////////////////////////////////

  //minValue

  if (validateInput.minValue > validateInput.value) {
    isValid = isValid && false;
  }

  ////////////////////////////////////////////////////////////////
  return isValid;
};

export default validateInput;
