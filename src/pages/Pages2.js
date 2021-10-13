import React from "react";
import ButtonsToPage from "../components/Layout/ButtonsToPage/ButtonsToPage";

import Logo from "../components/Layout/Sidebar/Logo/Logo";

import LightingRoutes from "../components/Layout/Sidebar/LightingRoutes/LightingRoutes";

import InvestitorQuotes from "../components/Layout/Sidebar/InvestitorQuotes/InvestitorQuotes";
import GetHelp from "../components/Layout/GetHelp/GetHelp";
import InvestmentPlans from "../components/Main/InvestmentPlans/InvestmentPlans";

export default function Pages2() {
  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <LightingRoutes />
        <InvestitorQuotes
          text={
            "Save from thousands to millions on your deal. Secure the best possible. And get independent, unbiased advice for free"
          }
          nameInvest={"Jodie Sears"}
          roleInvest={"UNITEDPROPERTIES’ AGENT"}
        />
      </div>
      <div className="container__right">
        <GetHelp />
        <InvestmentPlans />
        <ButtonsToPage
          numberPage={3}
          text={"Next step ➝"}
          backText={"Back to the previous step"}
          backPage={"/"}
        />
      </div>
    </div>
  );
}
