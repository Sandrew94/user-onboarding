import React from "react";
import ButtonForPages from "./UI/Button/ButtonForPages";
import Logo from "./UI/Logo/Logo";
import RouteInvestiments from "./UI/InfoPageInvest/RouteInvestiments";
import InfoInvestiments from "./UI/InfoPageInvest/InfoInvestiments";
import Step from "./StepFolder/Step";
import InvestmentPlans from "./InvestmentPlans/InvestmentPlans";

export default function Pages2() {
  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <RouteInvestiments />
        <InfoInvestiments
          text={
            "Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free"
          }
          nameInvest={"Jodie Sears"}
          roleInvest={"UNITEDPROPERTIES’ AGENT"}
        />
      </div>
      <div className="container__right">
        <Step />
        <InvestmentPlans />
        <ButtonForPages
          numberPage={3}
          text={"Next step ➝"}
          backText={"Back to the previous step"}
          backPage={"/"}
        />
      </div>
    </div>
  );
}
