import React, { useState, useEffect, useContext } from "react";
import {
  Wrapper,
  WrapperTitle,
  WrapperTitleButton,
  WrapperInput,
  Title,
  TitleDescription,
  SmallTitle,
} from "./InvestmentPreferences.style";
import InputCheckbox from "./InputCheckbox/InputCheckbox";
import { v4 as uuidv4 } from "uuid";
import { ContextAuth } from "../../../store/context-auth";

const clientHouse = [
  "Single family",
  "Residential multifamily",
  "Commercial retail",
  "Commercial industrial",
  "Commercial hospitality",
  "Commercial warehousing",
  "Commercial office",
  "Other",
];

const initialState = new Array(clientHouse.length).fill(false);

export default function InvestmentPreferences() {
  const [checkedState, setCheckedState] = useState(() => {
    return JSON.parse(localStorage.getItem("checkbox")) || initialState;
  });

  ///COntext

  const { setButtonDisabled } = useContext(ContextAuth);

  /////////

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  const allCheckbox = clientHouse.map((houseType, idx) => {
    return (
      <InputCheckbox
        key={uuidv4()}
        text={houseType}
        value={houseType}
        name={houseType}
        htmlFor={`checkbox-${idx + 1}`}
        id={`checkbox-${idx + 1}`}
        onChange={() => handleOnChange(idx)}
        checked={checkedState[idx]}
        activeLabel={checkedState[idx]}
        activeCheckbox={checkedState[idx]}
        activeLabelBackground={checkedState[idx]}
        activeSpanColor={checkedState[idx]}
      />
    );
  });

  //form validation

  let formIsValid = false;
  if (checkedState.some((el) => el === true)) {
    formIsValid = true;
  }

  useEffect(() => {
    setButtonDisabled(formIsValid);

    localStorage.setItem("checkbox", JSON.stringify(checkedState));
  }, [formIsValid, setButtonDisabled, checkedState]);

  return (
    <Wrapper>
      <WrapperTitle>
        <Title>Investment preferences</Title>
        <TitleDescription>
          This will help us figure out what your investment options are so that
          we can show you only possibly intresting for you deals
        </TitleDescription>
      </WrapperTitle>

      <WrapperTitleButton>
        <SmallTitle>What kind of real estate are you interested in?</SmallTitle>
        <WrapperInput>{allCheckbox}</WrapperInput>
      </WrapperTitleButton>
    </Wrapper>
  );
}
