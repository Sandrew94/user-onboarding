import React from "react";
import GetHelp from "../components/Layout/GetHelp/GetHelp";
import ButtonsToPage from "../components/Layout/ButtonsToPage/ButtonsToPage";

export default function Main({ children }) {
  return (
    <>
      <GetHelp />
      {children}
      <ButtonsToPage />
    </>
  );
}
