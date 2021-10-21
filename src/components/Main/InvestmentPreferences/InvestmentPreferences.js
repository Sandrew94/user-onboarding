import React, { useState } from "react";
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

export default function InvestmentPreferences() {
  const [checkedState, setCheckedState] = useState(
    new Array(clientHouse.length).fill(false)
  );

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
