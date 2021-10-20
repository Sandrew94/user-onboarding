import React from "react";
import {
  Wrapper,
  GreyLine,
  Divider,
  FromBlueSquare,
  ToBlueSquare,
} from "./ProgressBar.style";
import InputDataManipulation from "../../../../utils/InputDataManipulation";

export default function ProgressBar({ dataInput }) {
  const colorChanger1 = dataInput.toInput >= 10000 ? "#35A0EE" : "#A1AFB8";
  const colorChanger2 = dataInput.toInput >= 50000 ? "#35A0EE" : "#A1AFB8";
  const colorChanger3 = dataInput.toInput >= 100000 ? "#35A0EE" : "#A1AFB8";
  const colorChanger4 = dataInput.toInput >= 200000 ? "#35A0EE" : "#A1AFB8";
  const colorChanger5 = dataInput.toInput >= 500000 ? "#35A0EE" : "#A1AFB8";
  const colorChanger6 = dataInput.toInput >= 1000000 ? "#35A0EE" : "#A1AFB8";
  return (
    <Wrapper>
      <GreyLine width={InputDataManipulation(dataInput.toInput)}>
        <ToBlueSquare
          leftSquareTo={InputDataManipulation(dataInput.toInput)}
        ></ToBlueSquare>
        <FromBlueSquare
          leftSquareFrom={InputDataManipulation(dataInput.fromInput)}
        ></FromBlueSquare>
        <Divider
          leftPosition={0}
          numbersContent={"10,000"}
          backgroundColor={colorChanger1}
          color={colorChanger1}
        ></Divider>
        <Divider
          leftPosition={20}
          numbersContent={"50,000"}
          backgroundColor={colorChanger2}
          color={colorChanger2}
        ></Divider>
        <Divider
          leftPosition={40}
          numbersContent={"100,000"}
          backgroundColor={colorChanger3}
          color={colorChanger3}
        ></Divider>
        <Divider
          leftPosition={60}
          numbersContent={"200,000"}
          backgroundColor={colorChanger4}
          color={colorChanger4}
        ></Divider>
        <Divider
          leftPosition={80}
          numbersContent={"500,000"}
          backgroundColor={colorChanger5}
          color={colorChanger5}
        ></Divider>
        <Divider
          leftPosition={100}
          numbersContent={"1,000,000+"}
          backgroundColor={colorChanger6}
          color={colorChanger6}
        ></Divider>
      </GreyLine>
    </Wrapper>
  );
}
