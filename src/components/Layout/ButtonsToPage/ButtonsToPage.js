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

  const dinamicPath = location.pathname === "/pages2" ? 3 : 2;

  const dinamicBackText =
    location.pathname === "/"
      ? "Back to the homepage"
      : "Back to the previous step";

  const dinamicPreviousStep = location.pathname === "/pages2" ? "/" : "/pages2";

  const dinamicNextPageText =
    location.pathname === "/pages3" ? "Finish" : "Next step ➝";

  return (
    <Wrapper>
      <Link to={`${dinamicPreviousStep}`}>
        <Button type="button" backToHomepage={BtnBackHomepage}>
          &#8592; {dinamicBackText}
        </Button>
      </Link>
      <EmptyDivDivider>
        <Link to={`/pages${dinamicPath}`}>
          <Button
            type="button"
            skipForNow={skipForNowStyle}
            disabled={dinamicNextPageText === "Finish" ? true : false}
          >
            Skip for now
          </Button>
        </Link>

        <Link to={`/pages${dinamicPath}`} onClick={form}>
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
