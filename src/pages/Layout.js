import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Wrapper, ContainerRight } from "./Pages.style.js";

export default function Layout({ children, onButtonDisabled, onForm }) {
  return (
    <Wrapper>
      <Sidebar />
      <ContainerRight>
        <Main
          children={children}
          onButtonDisabled={onButtonDisabled}
          onForm={onForm}
        />
      </ContainerRight>
    </Wrapper>
  );
}
