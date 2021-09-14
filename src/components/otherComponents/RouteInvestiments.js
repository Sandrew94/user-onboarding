import React from "react";
import { useLocation } from "react-router-dom";

export default function RouteInvestiments() {
  const location = useLocation();

  const activeOrNot = function (nameClass) {
    if (location.pathname === "/pages2" || location.pathname === "/pages3") {
      return nameClass;
    }
  };

  activeOrNot();
  return (
    <div className="route_invest">
      <div className="route_invest_single-container">
        <span className={`route_invest_quadrato active-background`}>
          <span className={`route_invest_quadrato1 active-background`}>
            <span
              className={`route_invest_rettangolo-1 active-background`}
            ></span>
            <span
              className={`route_invest_rettangolo-2 active-background`}
            ></span>
          </span>
        </span>

        <span className={`route_invest_text active-text`}>Contact details</span>
      </div>

      <div className="route_invest_single-container">
        <span
          className={`route_invest_quadrato ${activeOrNot(
            "active-background"
          )}`}
        >
          <span
            className={`route_invest_quadrato1 ${activeOrNot(
              "active-background"
            )} deactivated`}
          >
            <span
              className={`route_invest_rettangolo-1 ${activeOrNot(
                "active-background"
              )} `}
            ></span>
            <span
              className={`route_invest_rettangolo-2 ${activeOrNot(
                "active-background"
              )}`}
            ></span>
          </span>
        </span>
        <span className={`route_invest_text ${activeOrNot("active-text")}`}>
          Investment plans
        </span>
      </div>

      <div className="route_invest_single-container">
        <span
          className={`route_invest_quadrato ${
            location.pathname === "/pages3" ? "active-background" : ""
          }`}
        >
          <span
            className={`route_invest_quadrato1 ${
              location.pathname === "/pages3"
                ? "active-background"
                : "deactivated"
            }  `}
          ></span>
        </span>
        <span
          className={`route_invest_text ${
            location.pathname === "/pages3" ? "active-text" : "deactivated"
          }`}
        >
          Investment preferences
        </span>
      </div>
    </div>
  );
}
