import React, { useState } from "react";
import StepProgressBar from "./StepProgressBar";
import { squareInput, fromInput } from "../utils/functionBar";

export default function InvestmentPlans() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeInput, setActiveInput] = useState(-1);

  const formToFrom = ["from", "to"];
  const box = ["Yes", "No"];

  const onHandleChangeBar = function (name, value) {
    if (name === "from") setFrom(value);
    if (name === "to") setTo(value);
  };

  const handleOnClick = (name, index) => {
    if (name === "button") setActiveIndex(index);
    if (name === "input") setActiveInput(index);
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
          {formToFrom.map((el, idx) => {
            return (
              <label
                key={idx}
                className="inv__plans-money-input-container"
                name={el}
              >
                <span
                  className={`inv__plans-money-input-span ${
                    activeInput === idx ? "active-input-color-name" : ""
                  }`}
                >
                  {el[0].toUpperCase() + el.slice(1, el.length)}
                </span>
                <input
                  key={idx}
                  name={el}
                  type="text"
                  className={`inv__plans-money-input-${el} ${
                    activeInput === idx ? "active-input-border" : ""
                  }`}
                  onChange={(e) => onHandleChangeBar(`${el}`, e.target.value)}
                  onClick={() => {
                    handleOnClick("input", idx);
                  }}
                />
              </label>
            );
          })}
        </div>
        <StepProgressBar
          from={fromInput(from, squareInput(to))}
          to={squareInput(to)}
        />
      </div>

      <div className="inv__plans-money-investor-container">
        <span className="inv__plans-money-investor-title">
          Are you an accredited investor?
        </span>

        <div className="inv__plans-container-btn">
          {box.map((el, idx) => {
            return (
              <label
                key={idx}
                className={`inv__plans-container-btn-label ${
                  activeIndex === idx ? "active-1" : ""
                }`}
              >
                <input
                  type="radio"
                  name="radio"
                  onClick={() => handleOnClick("button", idx)}
                />
                <span
                  className={`inv__plans-container-btn-label-checkmark ${
                    activeIndex === idx ? "color-blue" : ""
                  }`}
                >
                  {el}
                </span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
