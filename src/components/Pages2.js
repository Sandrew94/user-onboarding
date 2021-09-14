import React from "react";
import ButtonForPages from "./otherComponents/ButtonForPages";
import Logo from "./otherComponents/Logo";
import RouteInvestiments from "./otherComponents/RouteInvestiments";
import InfoInvestiments from "./otherComponents/InfoInvestiments";
import GetHelp from "./otherComponents/GetHelp";

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
        <GetHelp />
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
