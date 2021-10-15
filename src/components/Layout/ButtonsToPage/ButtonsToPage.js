import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import {
  Wrapper,
  BtnBackHomepage,
  skipForNowStyle,
  nextStepStyle,
  backgroundColorDisabledStyle,
  EmptyDivDivider,
} from "./ButtonToPage.style";

export default function ButtonsToPage(props) {
  const { backPage, numberPage, text, backText, buttonDisabled, form } = props;

  return (
    <Wrapper>
      <Link to={`${backPage}`}>
        <Button backToHomepage={BtnBackHomepage}>&#8592; {backText}</Button>
      </Link>
      <EmptyDivDivider>
        <Link to={`/pages${numberPage}`}>
          <Button
            skipForNow={skipForNowStyle}
            disabled={text === "Finish" ? true : false}
          >
            Skip for now
          </Button>
        </Link>

        <Link to={`/pages${numberPage}`} onClick={form}>
          <Button
            disabled={buttonDisabled ? false : true}
            type="submit"
            backgroundColorDisabled={
              buttonDisabled ? "" : backgroundColorDisabledStyle
            }
            nextStep={nextStepStyle}
            onClick={() => {
              return text === "Finish" ? alert("Finish") : "";
            }}
          >
            {text}
          </Button>
        </Link>
      </EmptyDivDivider>
    </Wrapper>
  );
}
