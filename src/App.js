import React, { useState } from "react";
import "./scss/index.scss";
import Layout from "./pages/Layout";
import ContactDetail from "./components/Main/ContactForm/ContactDetail";
import InvestmentPlans from "./components/Main/InvestmentPlans/InvestmentPlans";
import { GlobalStyle } from "./Global.style.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [buttonDisabled, setButtonDisabled] = useState("");
  const [form, setForm] = useState();

  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout onButtonDisabled={buttonDisabled} onForm={form}>
              <ContactDetail
                setButtonDisabled={setButtonDisabled}
                setForm={setForm}
              />
            </Layout>
          </Route>
          <Route path="/pages2">
            <Layout onButtonDisabled={buttonDisabled} onForm={form}>
              <InvestmentPlans
                setButtonDisabled={setButtonDisabled}
                setForm={setForm}
              />
            </Layout>
          </Route>
          <Route path="/pages3">
            <Layout></Layout>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
