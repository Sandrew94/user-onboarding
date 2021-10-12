import React, { useState } from "react";
import Logo from "../Sidebar/Logo/Logo";
import RouteInvestiments from "./UI/InfoPageInvest/RouteInvestiments";
import InvestitorQuotes from "../Sidebar/InvestitorQuotes/InvestitorQuotes";
import Step from "./StepFolder/Step";
import ContactDetail from "./ContactForm/ContactDetail";
import ButtonForPages from "./UI/Button/ButtonForPages";

export default function Pages1() {
  const [buttonDisabled, setButtonDisabled] = useState("");
  const [form, setForm] = useState();

  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <RouteInvestiments />
        <InvestitorQuotes
          text={
            "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"
          }
          nameInvest={"William Mac"}
          roleInvest={"CO-FOUNDER, INVESTOR"}
        />
      </div>
      <div className="container__right">
        <Step />
        <ContactDetail
          setButtonDisabled={setButtonDisabled}
          setForm={setForm}
        />
        <ButtonForPages
          form={form}
          buttonDisabled={buttonDisabled}
          numberPage={2}
          backPage={"/"}
          text={"Next step ➝"}
          backText={"Back to the homepage"}
        />
      </div>
    </div>
  );
}
