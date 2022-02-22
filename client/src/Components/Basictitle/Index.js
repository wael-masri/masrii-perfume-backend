import React from "react";
import "./Style.css";
const Title = (props) => {
  return (
    <>
      <h2 className="basictitle_h2">{props.title}</h2>
      <h5 className="basictitle_h5">{props.subtitle}</h5>
    </>
  );
};

export default Title;
