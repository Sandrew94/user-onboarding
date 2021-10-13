import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./Step.module.css";

export default function GetHelp() {
  const location = useLocation();

  const numbersOfStep = function () {
    const locationNumber = location.pathname[location.pathname.length - 1];

    if (locationNumber === "/") return 1;
    return locationNumber;
  };
  return (
    <div className={classes.get__help}>
      <span className={classes["get__help-text"]}>
        STEP {numbersOfStep()} OF 3
      </span>

      <div>
        <span className={classes["get__help-text"]}>Lost or have trouble?</span>
        <span className={classes["get__help-text-link"]}>Get help &#8594;</span>
      </div>
    </div>
  );
}
