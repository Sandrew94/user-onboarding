import Layout from "./pages/Layout";
import ContactDetail from "./components/Main/ContactForm/ContactDetail";
import InvestmentPlans from "./components/Main/InvestmentPlans/InvestmentPlans";
import InvestmentPreferences from "./components/Main/InvestmentPreferences/InvestmentPreferences";
import ClientReport from "./pages/ClientReport";
import { GlobalStyle } from "./Global.style.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Layout>
              <ContactDetail />
            </Layout>
          </Route>
          <Route path="/pages2">
            <Layout>
              <InvestmentPlans />
            </Layout>
          </Route>
          <Route path="/pages3">
            <Layout>
              <InvestmentPreferences />
            </Layout>
          </Route>
          <Route path="/pages/clientreport">
            <ClientReport />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
