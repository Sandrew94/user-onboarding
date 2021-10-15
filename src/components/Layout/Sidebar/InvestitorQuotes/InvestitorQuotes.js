import React from "react";
import { useLocation } from "react-router-dom";
import up from "../../../../assets/images/UP.svg";
import {
  Wrapper,
  Backtips,
  VectorLeft,
  LongText,
  ContainerFooter,
  QuoteCreator,
  QuoteCreatorRole,
  ContainerQuotesCreator,
  FooterLogoContainer,
  FooterLogo,
} from "./InvestitorQuotes.style.js";
import { investitorQuotesText } from "./InvestitorQuote.text.js";

export default function InfoInvestiments() {
  const location = useLocation();

  const { text, nameInvest, roleInvest } = investitorQuotesText(
    location.pathname
  );

  return (
    <Wrapper>
      <Backtips></Backtips>
      <VectorLeft></VectorLeft>
      <LongText>{text}</LongText>
      <ContainerFooter>
        <ContainerQuotesCreator>
          <QuoteCreator>{nameInvest}</QuoteCreator>
          <QuoteCreatorRole>{roleInvest}</QuoteCreatorRole>
        </ContainerQuotesCreator>
        <FooterLogoContainer>
          <FooterLogo src={up} alt="up-Logo" />
        </FooterLogoContainer>
      </ContainerFooter>
    </Wrapper>
  );
}
