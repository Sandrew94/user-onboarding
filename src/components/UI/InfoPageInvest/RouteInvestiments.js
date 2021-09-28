import React from "react";
import { useLocation } from "react-router-dom";
import classes from "./RouteInvestiments.module.css";

export default function RouteInvestiments() {
  const location = useLocation();

  const activeOrNot = function (nameClass) {
    if (location.pathname === "/pages2" || location.pathname === "/pages3") {
      return nameClass;
    }
  };

  activeOrNot();
  return (
    <div className={classes.route_invest}>
      <div className={classes["route_invest_single-container"]}>
        <span
          className={`${classes.route_invest_quadrato} ${classes["active-background"]}`}
        >
          <span
            className={`${classes.route_invest_quadrato1} ${classes["active-background"]}`}
          >
            <span
              className={`${classes["route_invest_rettangolo-1"]} ${classes["active-background"]}`}
            ></span>
            <span
              className={`${classes["route_invest_rettangolo-2"]} ${classes["active-background"]}`}
            ></span>
          </span>
        </span>

        <span
          className={`${classes.route_invest_text} ${classes["active-text"]}`}
        >
          Contact details
        </span>
      </div>

      <div className={classes["route_invest_single-container"]}>
        <span
          className={`${classes.route_invest_quadrato} ${activeOrNot([
            classes["active-background"],
          ])}`}
        >
          <span
            className={`${classes.route_invest_quadrato1} ${activeOrNot(
              classes["active-background"]
            )} ${classes.deactivated}`}
          >
            <span
              className={`${classes["route_invest_rettangolo-1"]} ${activeOrNot(
                classes["active-background"]
              )} `}
            ></span>
            <span
              className={`${classes["route_invest_rettangolo-2"]} ${activeOrNot(
                classes["active-background"]
              )}`}
            ></span>
          </span>
        </span>
        <span
          className={`${classes.route_invest_text} ${activeOrNot(
            classes["active-text"]
          )}`}
        >
          Investment plans
        </span>
      </div>

      <div className={classes["route_invest_single-container"]}>
        <span
          className={`${classes.route_invest_quadrato} ${
            location.pathname === "/pages3" ? classes["active-background"] : ""
          }`}
        >
          <span
            className={`${classes.route_invest_quadrato1} ${
              location.pathname === "/pages3"
                ? classes["active-background"]
                : classes.deactivated
            }  `}
          ></span>
        </span>
        <span
          className={`${classes.route_invest_text} ${
            location.pathname === "/pages3"
              ? classes["active-text"]
              : classes.deactivated
          }`}
        >
          Investment preferences
        </span>
      </div>
    </div>
  );
}
