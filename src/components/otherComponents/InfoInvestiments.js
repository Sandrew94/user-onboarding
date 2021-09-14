import React from "react";
import up from "../../images/UP.svg";

export default function InfoInvestiments(props) {
  const { text, nameInvest, roleInvest } = props;
  return (
    <div className="info-investiments">
      <span className="backtips-top"></span>
      <span className="vector-left"></span>
      <div className="info-investiments__text">{text}</div>
      <div className="info-investiments__inv-container">
        <div className="info-investiments__inv-name-container">
          <span className="info-investiments__inv-name">{nameInvest}</span>
          <span className="info-investiments__inv-name-role">{roleInvest}</span>
        </div>
        <span className="info-investiments__inv-name-logo">
          <img src={up} alt="up-Logo" />
        </span>
      </div>
    </div>
  );
}
