import React from "react";
import up from "../../../images/UP.svg";
import classes from "./InfoInvestiments.module.css";

export default function InfoInvestiments(props) {
  const { text, nameInvest, roleInvest } = props;
  return (
    <div className={classes.info_investiments}>
      <span className={classes["backtips-top"]}></span>
      <span className={classes["vector-left"]}></span>
      <div className={classes["info-investiments__text"]}>{text}</div>
      <div className={classes["info-investiments__inv-container"]}>
        <div className={classes["info-investiments__inv-name-container"]}>
          <span className={classes["info-investiments__inv-name"]}>
            {nameInvest}
          </span>
          <span className={classes["info-investiments__inv-name-role"]}>
            {roleInvest}
          </span>
        </div>
        <span className={classes["info-investiments__inv-name-logo"]}>
          <img src={up} alt="up-Logo" />
        </span>
      </div>
    </div>
  );
}
