import React, { useEffect, useState, useCallback } from "react";
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
import { LoadingWrapper, LsdRingDiv } from "../../../Loading/Loading.style";
const axios = require("axios");

export default function InfoInvestiments() {
  const location = useLocation();
  const [quotes, setQuotes] = useState([
    { titleQuote: "", roleQuote: "", investitorquotes: "" },
    { titleQuote: "", roleQuote: "", investitorquotes: "" },
    { titleQuote: "", roleQuote: "", investitorquotes: "" },
  ]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //////

  const getQuoteData = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://user-onboarding-backend.herokuapp.com/quote-texts`
      );

      setQuotes(data);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      getQuoteData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [getQuoteData]);

  ////////////////////////////////
  //Data manipulation

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
      {loading && (
        <LoadingWrapper>
          <LsdRingDiv></LsdRingDiv>
        </LoadingWrapper>
      )}
      {!loading && (
        <>
          <LongText>{investitorquotesMod}</LongText>
          <ContainerFooter>
            <ContainerQuotesCreator>
              <QuoteCreator>{titleQuoteMod}</QuoteCreator>
              <QuoteCreatorRole>{roleQuoteMod}</QuoteCreatorRole>
            </ContainerQuotesCreator>
            <FooterLogoContainer>
              <FooterLogo src={up} alt="up-Logo" />
            </FooterLogoContainer>
          </ContainerFooter>{" "}
        </>
      )}
      {error && (
        <div>
          Something went wrong: {error.message} - PLEASE RELOAD THE PAGE
        </div>
      )}
    </Wrapper>
  );
}
