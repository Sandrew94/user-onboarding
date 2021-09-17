import React from "react";

export default function StepProgressBar({ from, to }) {
  const stepInvestiment = [
    "10000",
    "50000",
    "100.000",
    "200.000",
    "500.000",
    "1.000.000+",
  ];

  return (
    <div className="inv__plans-money-bar">
      {stepInvestiment.map((step, idx) => {
        return (
          <span
            key={idx + 10}
            className={`inv__plans-money-bar-line-${idx + 1}`}
          >
            <span className="inv__plans-money-line-money">${step}</span>
          </span>
        );
      })}
      {stepInvestiment.map((_, idx) => {
        const allSquares = {
          borderRadius: "1px",
          width: "16px",
          height: "16px",
          position: "absolute",
          background: "#35a0ee",
          left: `${to}rem`,
        };

        const absoluteLine = {
          background: "#35a0ee",
          position: "absolute",
          top: "40%",
          width: `${from}rem`,
          height: "4px",
        };
        return (
          <span
            key={idx + 1}
            className={`inv__plans-absolute-square active-${idx + 1}`}
          >
            <span style={allSquares}></span>
            <span style={absoluteLine}></span>
          </span>
        );
      })}
    </div>
  );
}
