import React from "react";
import logo from "../../../../assets/images/logo.png";
import { LogoImg } from "./Logo.style.js";

export default function Logo() {
  return <LogoImg src={logo} alt="logo" />;
}