import React, { useState } from "react";
import AntSteps from "./AntSteps";

export default function InvestmentPlans() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  const onHandleChangeBar = function (name, value) {
    if (name === "from") setFrom(value);
    if (name === "to") setTo(value);
  };

  return (
    <div className="inv__plans-container">
      <div className="inv__plans-title">
        <span className="inv__plans-title-big">Investment plans</span>
        <span className="inv__plans-title-small">
          Let us know about your investment plans. This will help us get you to
          the right expert who will help you further
        </span>
      </div>
      <div className="inv__plans-planning-year-container">
        <span className="inv__plans-title-medium">
          How much are you planning to invest in this year?
        </span>
        <div className="inv__plans-money-input">
          <label className="inv__plans-money-input-container" name="From">
            <span className="inv__plans-money-input-span">From</span>
            <input
              name="From"
              type="text"
              className="inv__plans-money-input-from"
              onChange={(e) => onHandleChangeBar("from", e.target.value)}
            />
          </label>

          <label className="inv__plans-money-input-container" name="To">
            <span className="inv__plans-money-input-span">To</span>
            <input
              type="text"
              name="To"
              className="inv__plans-money-input-input-to"
              onChange={(e) => onHandleChangeBar("to", e.target.value)}
            />
          </label>
        </div>
        <div className="inv__plans-money-bar">
          {console.log(to / 10000)}
          <AntSteps currentStep={from / 10000} lastStep={to / 100000} />
        </div>
      </div>

      <div className="inv__plans-money-investor-container">
        <span className="inv__plans-money-investor-title">
          Are you an accredited investor?
        </span>

        <div className="inv__plans-container-btn">
          <label className="inv__plans-container-btn-label">
            Yes
            <input type="radio" name="radio" />
            <span className="inv__plans-container-btn-label-checkmark"></span>
          </label>
          <label className="inv__plans-container-btn-label">
            No
            <input type="radio" name="radio" />
            <span className="inv__plans-container-btn-label-checkmark"></span>
          </label>
        </div>
      </div>
    </div>
  );
}
