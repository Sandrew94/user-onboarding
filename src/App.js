import React from "react";
import "./scss/index.scss";
import Pages1 from "./pages/Pages1";
import Pages2 from "./pages/Pages2";
import Pages3 from "./pages/Pages3";
import { GlobalStyle } from "./Global.style.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Pages1 />
          </Route>
          <Route path="/pages2" component={Pages2} />
          <Route path="/pages3" component={Pages3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
