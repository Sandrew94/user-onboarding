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
        <InfoInvestiments />
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
