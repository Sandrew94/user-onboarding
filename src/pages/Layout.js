import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import { Wrapper, ContainerRight } from "./Pages.style.js";

export default function Layout({ children }) {
  return (
    <Wrapper>
      <Sidebar />
      <ContainerRight>
        <Main children={children} />
      </ContainerRight>
    </Wrapper>
  );
}
