import React from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonForPages.module.css";
import Button from "../../Button/Button";

export default function ButtonsToPage(props) {
  const { backPage, numberPage, text, backText, buttonDisabled, form } = props;

  return (
    <div className={classes["btn-container"]}>
      <Link to={`${backPage}`}>
        <Button
          className={`${classes.btn} ${classes["btn-no-background"]} ${classes["btn-color-blue"]}`}
        >
          &#8592; {backText}{" "}
        </Button>
      </Link>
      <div>
        <Link to={`/pages${numberPage}`}>
          <Button
            className={`${classes.btn} ${classes["btn-background-color-blue"]} ${classes["btn-color-blue"]}`}
            disabled={text === "Finish" ? true : false}
          >
            Skip for now{" "}
          </Button>
        </Link>

        <Link to={`/pages${numberPage}`} onClick={form}>
          <Button
            disabled={buttonDisabled ? false : true}
            type="submit"
            className={`${classes.btn} ${
              classes["btn-background-color-blue-light"]
            } ${classes["btn-margin-left"]} ${
              buttonDisabled ? "" : classes.disabled
            }`}
            onClick={() => {
              return text === "Finish" ? alert("Finish") : "";
            }}
          >
            {text}
          </Button>
        </Link>
      </div>
    </div>
  );
}
