import React from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonForPages.module.css";

export default function ButtonForPages(props) {
  const { backPage, numberPage, text, backText } = props;
  return (
    <div className={classes["btn-container"]}>
      <Link to={`${backPage}`}>
        <button
          className={`${classes.btn} ${classes["btn-no-background"]} ${classes["btn-color-blue"]}`}
        >
          &#8592; {backText}
        </button>
      </Link>
      <div>
        <Link to={`/pages${numberPage}`}>
          <button
            className={`${classes.btn} ${classes["btn-background-color-blue"]} ${classes["btn-color-blue"]}`}
            disabled={text === "Finish" ? true : false}
          >
            Skip for now
          </button>
        </Link>
        <Link to={`/pages${numberPage}`}>
          <button
            className={`${classes.btn} ${classes["btn-background-color-blue-light"]} ${classes["btn-margin-left"]}`}
            onClick={() => {
              return text === "Finish" ? alert("Finish") : "";
            }}
          >
            {text}
          </button>
        </Link>
      </div>
    </div>
  );
}
