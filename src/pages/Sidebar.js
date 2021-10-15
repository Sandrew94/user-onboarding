import React from "react";
import InvestitorQuotes from "../components/Layout/Sidebar/InvestitorQuotes/InvestitorQuotes";
import LightingRoutes from "../components/Layout/Sidebar/LightingRoutes/LightingRoutes";
import Logo from "../components/Layout/Sidebar/Logo/Logo";
import { ContainerLeft } from "./Pages.style.js";

export default function Sidebar() {
  return (
    <ContainerLeft>
      <Logo />
      <LightingRoutes />
      <InvestitorQuotes />
    </ContainerLeft>
  );
}
