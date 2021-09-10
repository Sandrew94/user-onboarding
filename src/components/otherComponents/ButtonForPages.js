import React from "react";
import { Link } from "react-router-dom";

export default function ButtonForPages(props) {
  const { backPage, numberPage, text, backText } = props;
  return (
    <div>
      <Link to={`${backPage}`}>
        <button>{backText}</button>
      </Link>
      <Link to={`/pages${numberPage}`}>
        <button disabled={text === "Finish" ? true : false}>
          Skip for now
        </button>
      </Link>
      <Link to={`/pages${numberPage}`}>
        <button>{text}</button>
      </Link>
    </div>
  );
}
