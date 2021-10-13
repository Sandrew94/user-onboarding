import React, { useState } from "react";
import Logo from "../components/Layout/Sidebar/Logo/Logo";

import LightingRoutes from "../components/Layout/Sidebar/LightingRoutes/LightingRoutes";
import InvestitorQuotes from "../components/Layout/Sidebar/InvestitorQuotes/InvestitorQuotes";
import GetHelp from "../components/Layout/GetHelp/GetHelp";

import ContactDetail from "../components/Main/ContactForm/ContactDetail";
import ButtonsToPage from "../components/Layout/ButtonsToPage/ButtonsToPage";

export default function Pages1() {
  const [buttonDisabled, setButtonDisabled] = useState("");
  const [form, setForm] = useState();

  return (
    <div className="container">
      <div className="container__left">
        <Logo />
        <LightingRoutes />
        <InvestitorQuotes
          text={
            "We care about your time, that's why we created a 3-stage onboarding that will not take more than 5 minutes to complete"
          }
          nameInvest={"William Mac"}
          roleInvest={"CO-FOUNDER, INVESTOR"}
        />
      </div>
      <div className="container__right">
        <GetHelp />
        <ContactDetail
          setButtonDisabled={setButtonDisabled}
          setForm={setForm}
        />
        <ButtonsToPage
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
