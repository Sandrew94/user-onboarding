const InputDataManipulation = (input) => {
  if (input <= 10000) return;
  if (input <= 100000) return +input / 1000 / 2.5;
  if (input > 100000 && input <= 200000) return (+input / 10000) * 3;
  if (input > 200000 && input <= 250000) return 63;
  if (input > 250000 && input <= 300000) return 66;
  if (input > 300000 && input <= 350000) return 69;
  if (input > 350000 && input <= 400000) return 73;
  if (input > 400000 && input <= 450000) return 76;
  if (input > 450000 && input <= 500000) return 80;
  if (input > 500000 && input <= 600000) return 85;
  if (input > 600000 && input <= 700000) return 90;
  if (input > 700000 && input <= 800000) return 95;
  if (input > 800000 && input <= 900000) return 97;
  if (input > 900000 && input <= 999999) return 99;
  return 100;
};

export default InputDataManipulation;
