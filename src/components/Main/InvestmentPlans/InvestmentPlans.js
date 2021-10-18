import React, { useState, useEffect, useCallback } from "react";
import StepProgressBar from "./StepProgressBar";
import { squareInput, fromInput } from "../../../utils/functionBar";
import ButtonRadio from "./ButtonsRadio/ButtonRadio";
import FromInput from "./Inputs/FromInput";
import ToInput from "./Inputs/ToInput";

import {
  Wrapper,
  TitleWrapper,
  TitleBig,
  TitleSmall,
  TitlePlanninng,
  TitleMedium,
  MoneyInputWrapper,
  FooterWrapper,
  InvestitorTitle,
} from "./InvestmentPlans.style";

export default function InvestmentPlans({ setForm, setButtonDisabled }) {
  const [validation, setValidation] = useState({
    ToInputIsValid: false,
    FromInputIsValid: false,
    buttonState: false,
  });

  //form validation
  let formIsValid = false;
  if (
    validation.ToInputIsValid &&
    validation.FromInputIsValid &&
    validation.buttonState
  ) {
    formIsValid = true;
  }

  //form handler

  const formSubmitHandler = useCallback(() => {
    console.log("form");
    if (!validation.ToInputIsValid && !validation.FromInputIsValid) {
      return;
    }
  }, [validation.ToInputIsValid, validation.FromInputIsValid]);

  useEffect(() => {
    setForm(() => formSubmitHandler);
    setButtonDisabled(formIsValid);
  }, [setButtonDisabled, formIsValid, setForm, formSubmitHandler]);

  return (
    <Wrapper>
      <TitleWrapper>
        <TitleBig>Investment plans</TitleBig>
        <TitleSmall>
          Let us know about your investment plans. This will help us get you to
          the right expert who will help you further
        </TitleSmall>
      </TitleWrapper>
      <TitlePlanninng>
        <TitleMedium>
          How much are you planning to invest in this year?
        </TitleMedium>
        <MoneyInputWrapper>
          <FromInput setValidation={setValidation} validation={validation} />
          <ToInput setValidation={setValidation} validation={validation} />
        </MoneyInputWrapper>

        <StepProgressBar
        // from={fromInput(from, squareInput(to))}
        // to={squareInput(to)}
        />
      </TitlePlanninng>

      <FooterWrapper>
        <InvestitorTitle>Are you an accredited investor?</InvestitorTitle>
        <ButtonRadio setValidation={setValidation} validation={validation} />
      </FooterWrapper>
    </Wrapper>
  );
}
