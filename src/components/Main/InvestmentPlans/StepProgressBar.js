import React from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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
        const MoneyBarLine = styled.span({
          left: "0rem",
          top: "-0.5rem",
          height: "14px",
          width: "3px",
          content: "",
          backgroundColor: "#a1afb8",
          position: "absolute",
        });

        const MoneyBarBlue = styled(MoneyBarLine)`
          background-color: red;
        `;

        return (
          <span
            key={uuidv4()}
            className={`inv__plans-money-bar-line-${idx + 1}`}
          >
            <MoneyBarLine key={uuidv4()} />
            <span key={uuidv4()} className="inv__plans-money-line-money">
              ${step}
            </span>
          </span>
        );
      })}
      {stepInvestiment.map((_) => {
        const allSquares = {
          borderRadius: "1px",
          width: "16px",
          height: "16px",
          position: "absolute",
          background: "#35a0ee",
          left: `${to}rem`,
        };

        const AbsoluteLine = styled.span({
          background: "#35a0ee",
          position: "absolute",
          top: "40%",
          width: `${from}rem`,
          height: "4px",

          "&::after": {
            background: "#35a0ee",
            position: "absolute",
            top: "40%",
            width: "100px",
            height: "4px",
          },
        });
        return (
          <span key={uuidv4()} className={`inv__plans-absolute-square`}>
            <span key={uuidv4()} style={allSquares}></span>
            <AbsoluteLine key={uuidv4()} />
          </span>
        );
      })}
    </div>
  );
}
