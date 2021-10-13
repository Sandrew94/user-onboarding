export const squareInput = function (input) {
  if (input <= 10000) return 0;
  if (input <= 15000 && input > 0) return 4;
  if (input <= 25000 && input > 15000) return 5;
  if (input <= 35000 && input > 25000) return 7.5;
  if (input <= 45000 && input > 35000) return 9.5;
  if (input <= 50000 && input > 45000) return 11.7;
  ////////////////////////////////
  if (input <= 60000 && input > 50000) return 15.5;
  if (input <= 70000 && input > 60000) return 17.5;
  if (input <= 80000 && input > 70000) return 19.5;
  if (input <= 90000 && input > 80000) return 21.5;
  if (input <= 100000 && input > 90000) return 23.5;
  ///////////////////////////////////////////////
  if (input <= 120000 && input > 100000) return 22 + 5.5;
  if (input <= 140000 && input > 120000) return 24 + 5.5;
  if (input <= 160000 && input > 140000) return 26 + 5.5;
  if (input <= 180000 && input > 160000) return 27.5 + 5.5;
  if (input <= 200000 && input > 180000) return 29 + 5.5;
  ///////////////////////////////////////////////
  if (input <= 250000 && input > 200000) return 31 + 7.5;
  if (input <= 300000 && input > 250000) return 32.5 + 7.5;
  if (input <= 350000 && input > 300000) return 34.5 + 7.5;
  if (input <= 400000 && input > 350000) return 36 + 7.5;
  if (input <= 450000 && input > 400000) return 37.5 + 7.5;
  if (input <= 500000 && input > 450000) return 39 + 7.5;
  ///////////////////////////////////////////////
  if (input <= 600000 && input > 500000) return 41 + 9.5;
  if (input <= 700000 && input > 600000) return 43 + 9.5;
  if (input <= 800000 && input > 700000) return 45 + 9.5;
  if (input <= 900000 && input > 800000) return 46.5 + 9.5;
  if (input <= 999999 && input > 900000) return 47.5 + 9.5;
  if (input >= 1000000) return 49 + 9.5;
};

export const fromInput = function (from, squareInput) {
  if (from < 10000) return 0;
  if (from <= 15000 && from > 0) return squareInput;
  if (from <= 25000 && from > 15000) return squareInput;
  if (from <= 35000 && from > 25000) return squareInput;
  if (from <= 45000 && from > 35000) return squareInput;
  if (from <= 50000 && from > 45000) return squareInput;
  ////////////////////////////////
  if (from <= 60000) return squareInput;
  if (from <= 70000) return squareInput;
  if (from <= 80000) return squareInput;
  if (from <= 90000) return squareInput;
  if (from <= 100000) return squareInput;
  ////////////////////////////////
  if (from <= 120000) return squareInput;
  if (from <= 140000) return squareInput;
  if (from <= 160000) return squareInput;
  if (from <= 180000) return squareInput;
  if (from <= 200000) return squareInput;
  ///////////////////////////////////////////////
  if (from <= 250000) return squareInput;
  if (from <= 300000) return squareInput;
  if (from <= 350000) return squareInput;
  if (from <= 400000) return squareInput;
  if (from <= 450000) return squareInput;
  if (from <= 500000) return squareInput;
  ///////////////////////////////////////////////
  ///////////////////////////////////////////////
  if (from <= 600000) return squareInput;
  if (from <= 700000) return squareInput;
  if (from <= 800000) return squareInput;
  if (from <= 900000) return squareInput;
  if (from <= 1000000) return squareInput;
  if (from >= 1000001) return squareInput;
};
