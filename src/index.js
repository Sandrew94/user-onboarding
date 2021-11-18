import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ContextAuthProvider from "./store/context-auth";

ReactDOM.render(
  <ContextAuthProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextAuthProvider>,
  document.getElementById("root")
);
