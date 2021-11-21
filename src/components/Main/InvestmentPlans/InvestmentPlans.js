import React, { useState, useEffect, useContext } from "react";
import ButtonRadio from "./ButtonsRadio/ButtonRadio";
import FromInput from "./Inputs/FromInput";
import ToInput from "./Inputs/ToInput";
import ProgressBar from "./ProgressBar/ProgressBar";
import { ContextAuth } from "../../../store/context-auth";
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

export default function InvestmentPlans() {
  //Context Authentication
  const { setButtonDisabled, validation, setInputValue } =
    useContext(ContextAuth);

  const [dataInput, setDataInput] = useState({
    fromInput: 0,
    toInput: 0,
  });

  let formIsValid = false;
  if (
    validation.ToInputIsValid &&
    validation.FromInputIsValid &&
    validation.buttonState
  ) {
    formIsValid = true;
  }

  useEffect(() => {
    setButtonDisabled(formIsValid);
  }, [setButtonDisabled, formIsValid, setInputValue]);

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
          <FromInput setDataInput={setDataInput} />
          <ToInput setDataInput={setDataInput} />
        </MoneyInputWrapper>

        <ProgressBar dataInput={dataInput} />
      </TitlePlanninng>

      <FooterWrapper>
        <InvestitorTitle>Are you an accredited investor?</InvestitorTitle>
        <ButtonRadio />
      </FooterWrapper>
    </Wrapper>
  );
}
