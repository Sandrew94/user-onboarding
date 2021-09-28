import React from "react";
import ButtonForPages from "./UI/Button/ButtonForPages";

import Logo from "./UI/Logo/Logo";
import RouteInvestiments from "./UI/InfoPageInvest/RouteInvestiments";
import InfoInvestiments from "./UI/InfoPageInvest/InfoInvestiments";

import Step from "./StepFolder/Step";

export default function Pages3() {
  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <RouteInvestiments />
        <InfoInvestiments
          text={
            "United Properties is about fast & easy searching, buying, selling and investing ever — online, with an expert by our side"
          }
          nameInvest={"Ollie Mcmahon"}
          roleInvest={"MANAGING DIRECTOR"}
        />
      </div>
      <div className="container__right">
        <Step />
        <ButtonForPages
          numberPage={3}
          backPage={"/pages2"}
          text={"Finish"}
          backText={"Back to the previous step"}
        />
      </div>
    </div>
  );
}
