import React from "react";
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

export default function InfoInvestiments(props) {
  const { text, nameInvest, roleInvest } = props;
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
