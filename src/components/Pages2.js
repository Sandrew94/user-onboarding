import React from "react";
import ButtonForPages from "./UI/Button/ButtonForPages";
import Logo from "../Sidebar/Logo/Logo";
import RouteInvestiments from "./UI/InfoPageInvest/RouteInvestiments";
import InvestitorQuotes from "../Sidebar/InvestitorQuotes/InvestitorQuotes";
import Step from "./StepFolder/Step";
import InvestmentPlans from "./InvestmentPlans/InvestmentPlans";

export default function Pages2() {
  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <RouteInvestiments />
        <InvestitorQuotes
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
