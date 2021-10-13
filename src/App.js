import React from "react";
import "./scss/index.scss";
import Pages1 from "./pages/Pages1";
import Pages2 from "./pages/Pages2";
import Pages3 from "./pages/Pages2";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Pages1} />
        <Route path="/pages2" component={Pages2} />
        <Route path="/pages3" component={Pages3} />
      </Switch>
    </Router>
  );
}

export default App;
