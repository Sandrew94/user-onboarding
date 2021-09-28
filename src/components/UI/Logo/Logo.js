import React from "react";
import logo from "../../../images/logo.png";
import classes from "./Logo.module.css";

export default function Logo() {
  return <img className={classes.logo} src={logo} alt="logo" />;
}
