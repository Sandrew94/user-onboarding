import React, { useEffect, useState } from "react";
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
const axios = require("axios");

export default function InfoInvestiments() {
  const location = useLocation();
  const [quotes, setQuotes] = useState([
    { titleQuote: "", roleQuote: "", investitorquotes: "" },
  ]);

  useEffect(() => {
    const getQuoteData = async () => {
      const { data } = await axios.get(`http://localhost:1337/quote-texts`);
      console.log(data);
      setQuotes(data);

      //add error handling and loading handling
    };

    getQuoteData();
  }, []);

  let titleQuoteMod = "";
  let roleQuoteMod = "";
  let investitorquotesMod = "";

  if (location.pathname === "/") {
    let { titleQuote, roleQuote, investitorquotes } = quotes[0];
    titleQuoteMod = titleQuote;
    roleQuoteMod = roleQuote;
    investitorquotesMod = investitorquotes;
  }

  if (location.pathname === "/pages2") {
    let { titleQuote, roleQuote, investitorquotes } = quotes[1];
    titleQuoteMod = titleQuote;
    roleQuoteMod = roleQuote;
    investitorquotesMod = investitorquotes;
  }

  if (location.pathname === "/pages3") {
    let { titleQuote, roleQuote, investitorquotes } = quotes[2];
    titleQuoteMod = titleQuote;
    roleQuoteMod = roleQuote;
    investitorquotesMod = investitorquotes;
  }

  return (
    <Wrapper>
      <Backtips></Backtips>
      <VectorLeft></VectorLeft>
      <LongText>{investitorquotesMod}</LongText>
      <ContainerFooter>
        <ContainerQuotesCreator>
          <QuoteCreator>{titleQuoteMod}</QuoteCreator>
          <QuoteCreatorRole>{roleQuoteMod}</QuoteCreatorRole>
        </ContainerQuotesCreator>
        <FooterLogoContainer>
          <FooterLogo src={up} alt="up-Logo" />
        </FooterLogoContainer>
      </ContainerFooter>
    </Wrapper>
  );
}
