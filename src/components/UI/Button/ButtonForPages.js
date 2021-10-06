import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./ButtonForPages.module.css";
import Button from "./Button";
import handleSubmitFunction from "../../Context/context-state";

export default function ButtonForPages(props) {
  const { backPage, numberPage, text, backText } = props;

  const contextData = useContext(handleSubmitFunction);

  const handleSubmit = (e) => {
    console.log(e);
    console.log("test");
  };

  return (
    <form onSubmit={handleSubmit}>
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

          <Link to={`/pages${numberPage}`}>
            <Button
              type="submit"
              className={`${classes.btn} ${classes["btn-background-color-blue-light"]} ${classes["btn-margin-left"]}`}
              onClick={() => {
                return text === "Finish" ? alert("Finish") : "";
              }}
            >
              {text}
            </Button>
          </Link>
        </div>
      </div>
    </form>
  );
}
