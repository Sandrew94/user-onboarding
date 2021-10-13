import React from "react";
import ButtonsToPage from "../components/Layout/ButtonsToPage/ButtonsToPage";

import Logo from "../components/Layout/Sidebar/Logo/Logo";
import LightingRoutes from "../components/Layout/Sidebar/LightingRoutes/LightingRoutes";
import InvestitorQuotes from "../components/Layout/Sidebar/InvestitorQuotes/InvestitorQuotes";

import GetHelp from "../components/Layout/GetHelp/GetHelp";

export default function Pages3() {
  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <LightingRoutes />
        <InvestitorQuotes
          text={
            "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side"
          }
          nameInvest={"Ollie Mcmahon"}
          roleInvest={"MANAGING DIRECTOR"}
        />
      </div>
      <div className="container__right">
        <GetHelp />
        <ButtonsToPage
          numberPage={3}
          backPage={"/pages2"}
          text={"Finish"}
          backText={"Back to the previous step"}
        />
      </div>
    </div>
  );
}
