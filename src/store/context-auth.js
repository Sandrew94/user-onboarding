import * as React from "react";

const ContextAuth = React.createContext({
  form: "",
  setForm: () => {},
  buttonDisabled: false,
  setButtonDisabled: () => {},
});

export default function ContextAuthProvider() {
  const [form, setForm] = React.useState("");
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const contextValue = {
    form,
    setForm,
    buttonDisabled,
    setButtonDisabled,
  };

  return <ContextAuth.Provider value={contextValue}></ContextAuth.Provider>;
}
