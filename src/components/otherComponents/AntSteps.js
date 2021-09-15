import React from "react";
import { Steps, Popover } from "antd";
import Icon from "@ant-design/icons";
import "antd/dist/antd.css";
import { ReactComponent as SquareSvg } from "../../images/RoundedRectangle.svg";

export default function AntSteps({ currentStep, lastStep }) {
  const { Step } = Steps;

  const customDot = ({ status, index }) => (
    <Popover
      content={
        <span>
          step {index} status: {status}
        </span>
      }
    >
      <Icon component={SquareSvg} />
    </Popover>
  );
  return (
    <Steps current={currentStep + lastStep} progressDot={customDot}>
      <Step
        title="$10000"
        className={`${currentStep + lastStep >= 0 ? "filter" : ""}`}
      />
      <Step
        title="$50000"
        className={`${currentStep + lastStep >= 1 ? "filter" : ""}`}
      />
      <Step
        title="$100.000"
        className={`${currentStep + lastStep >= 2 ? "filter" : ""}`}
      />
      <Step
        title="$200.000"
        className={`${currentStep + lastStep >= 3 ? "filter" : ""}`}
      />
      <Step
        title="$500.000"
        className={`${currentStep + lastStep >= 4 ? "filter" : ""}`}
      />
      <Step
        title="$1.000.000 +"
        className={`${currentStep + lastStep >= 5 ? "filter" : ""}`}
      />
    </Steps>
  );
}
