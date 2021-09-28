import React from "react";
import Logo from "./UI/Logo/Logo";
import RouteInvestiments from "./UI/InfoPageInvest/RouteInvestiments";
import InfoInvestiments from "./UI/InfoPageInvest/InfoInvestiments";
import Step from "./StepFolder/Step";
import ContactDetail from "./ContactForm/ContactDetail";
import ButtonForPages from "./UI/Button/ButtonForPages";

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
        <Step />
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
