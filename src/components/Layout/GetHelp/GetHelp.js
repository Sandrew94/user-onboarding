import React from "react";
import { useLocation } from "react-router-dom";
import { Wrapper, TextStyle, LinkTextStyle, Container } from "./GetHelp.style";

export default function GetHelp() {
  const location = useLocation();

  const numbersOfStep = function () {
    const locationNumber = location.pathname[location.pathname.length - 1];

    if (locationNumber === "/") return 1;
    return locationNumber;
  };

  return (
    <Wrapper>
      <TextStyle>STEP {numbersOfStep()} OF 3</TextStyle>
      <Container>
        <TextStyle>Lost or have trouble? </TextStyle>
        <LinkTextStyle>Get help &#8594;</LinkTextStyle>
      </Container>
    </Wrapper>
  );
}
