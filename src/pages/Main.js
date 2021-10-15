import React from "react";
import GetHelp from "../components/Layout/GetHelp/GetHelp";
import ButtonsToPage from "../components/Layout/ButtonsToPage/ButtonsToPage";

export default function Main({ children, onButtonDisabled, onForm }) {
  return (
    <>
      <GetHelp />
      {children}
      <ButtonsToPage form={onForm} buttonDisabled={onButtonDisabled} />
    </>
  );
}
