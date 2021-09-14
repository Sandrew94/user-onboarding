import React from "react";
import ButtonForPages from "./otherComponents/ButtonForPages";
import Logo from "./otherComponents/Logo";
import RouteInvestiments from "./otherComponents/RouteInvestiments";
import InfoInvestiments from "./otherComponents/InfoInvestiments";
import GetHelp from "./otherComponents/GetHelp";

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
        <GetHelp />
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
