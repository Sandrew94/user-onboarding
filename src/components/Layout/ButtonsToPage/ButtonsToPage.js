import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  const { buttonDisabled, form } = props;

  const location = useLocation();

  const dinamicPath = (location) => {
    if (location === "/pages3") return "/clientreport";
    return location === "/pages2" ? 3 : 2;
  };

  const dinamicBackText =
    location.pathname === "/"
      ? "Back to the homepage"
      : "Back to the previous step";

  const dinamicPreviousStep = (location) => {
    if (location === "/") return "/";
    if (location === "/pages2") return "/";
    else return "/pages2";
  };

  const dinamicNextPageText =
    location.pathname === "/pages3" ? "Finish" : "Next step ➝";

  return (
    <Wrapper>
      <Link to={`${dinamicPreviousStep(location.pathname)}`}>
        <Button type="button" backToHomepage={BtnBackHomepage}>
          &#8592; {dinamicBackText}
        </Button>
      </Link>
      <EmptyDivDivider>
        <Link to={`/pages${dinamicPath(location.pathname)}`}>
          <Button
            type="button"
            skipForNow={skipForNowStyle}
            disabled={dinamicNextPageText === "Finish" ? true : false}
          >
            Skip for now
          </Button>
        </Link>

        <Link to={`/pages${dinamicPath(location.pathname)}`} onClick={form}>
          <Button
            disabled={buttonDisabled ? false : true}
            type="submit"
            backgroundColorDisabled={
              buttonDisabled ? "" : backgroundColorDisabledStyle
            }
            nextStep={nextStepStyle}
            onClick={() => {
              return dinamicNextPageText === "Finish" ? alert("Finish") : "";
            }}
          >
            {dinamicNextPageText}
          </Button>
        </Link>
      </EmptyDivDivider>
    </Wrapper>
  );
}
