import React from "react";
import { Link } from "react-router-dom";

export default function ButtonForPages(props) {
  const { backPage, numberPage, text, backText } = props;
  return (
    <div className="btn-container">
      <Link to={`${backPage}`}>
        <button className="btn btn-no-background btn-color-blue">
          &#8592; {backText}
        </button>
      </Link>
      <div className="btn-container-last-2">
        <Link to={`/pages${numberPage}`}>
          <button
            className="btn btn-color-blue btn-background-color-blue"
            disabled={text === "Finish" ? true : false}
          >
            Skip for now
          </button>
        </Link>
        <Link to={`/pages${numberPage}`}>
          <button
            className="btn btn-background-color-blue-light btn-margin-left"
            onClick={() => {
              return text === "Finish" ? alert("Finish") : "";
            }}
          >
            {text}
          </button>
        </Link>
      </div>
    </div>
  );
}
