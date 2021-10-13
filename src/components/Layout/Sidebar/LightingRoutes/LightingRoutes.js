import React from "react";
import { useLocation } from "react-router-dom";
import {
  Wrapper,
  WrapperSquare,
  FirstSquare,
  SecondSquare,
  FirstRectangle,
  SecondRectangle,
  WrapperText,
} from "./LightingRoutes.style";

export default function LightingRoutes() {
  const location = useLocation();

  const classesStylingPages2 =
    location.pathname === "/pages2" || location.pathname === "/pages3"
      ? "#fff"
      : "rgba(255, 255, 255, 0.5)";

  const classesStylingPages3 =
    location.pathname === "/pages3" ? "#fff" : "rgba(255, 255, 255, 0.5)";

  return (
    <Wrapper>
      <WrapperSquare>
        <FirstSquare backgroundColor={"#fff"}>
          <SecondSquare backgroundColor={"#fff"}>
            <FirstRectangle backgroundColor={"#fff"} />
            <SecondRectangle backgroundColor={"#fff"} />
          </SecondSquare>
        </FirstSquare>
        <WrapperText color={"#fff"}>Contact details</WrapperText>
      </WrapperSquare>

      <WrapperSquare>
        <FirstSquare backgroundColor={classesStylingPages2}>
          <SecondSquare backgroundColor={classesStylingPages2}>
            <FirstRectangle backgroundColor={classesStylingPages2} />
            <SecondRectangle backgroundColor={classesStylingPages2} />
          </SecondSquare>
        </FirstSquare>
        <WrapperText color={classesStylingPages2}>Investment plans</WrapperText>
      </WrapperSquare>

      <WrapperSquare>
        <FirstSquare backgroundColor={classesStylingPages3}>
          <SecondSquare backgroundColor={classesStylingPages3} />
        </FirstSquare>
        <WrapperText color={classesStylingPages3}>
          Investment preferences
        </WrapperText>
      </WrapperSquare>
    </Wrapper>
  );
}
