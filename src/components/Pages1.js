import React from "react";
import Logo from "./otherComponents/Logo";
import RouteInvestiments from "./otherComponents/RouteInvestiments";
import InfoInvestiments from "./otherComponents/InfoInvestiments";
import GetHelp from "./otherComponents/GetHelp";
import ContactDetail from "./otherComponents/ContactDetail";
import ButtonForPages from "./otherComponents/ButtonForPages";

export default function Pages1() {
  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <RouteInvestiments />
        <InfoInvestiments
          text={
            "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"
          }
          nameInvest={"William Mac"}
          roleInvest={"CO-FOUNDER, INVESTOR"}
        />
      </div>
      <div className="container__right">
        <GetHelp />
        <ContactDetail />
        <ButtonForPages
          numberPage={2}
          backPage={"/"}
          text={"Next step ➝"}
          backText={"Back to the homepage"}
        />
      </div>
    </div>
  );
}
