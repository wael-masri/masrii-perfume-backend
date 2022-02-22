import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import "./Style.css";
import slid1 from "../../Images/slid1.jpg";
import slid2 from "../../Images/slid2.jpg";
import slid3 from "../../Images/slid3.jpg";
import slid4 from "../../Images/slid4.jpg";
import slid5 from "../../Images/slid5.jpg";

const Slider = () => {
  const images = [slid1, slid2, slid3, slid4, slid5];

  const zoomOutProperties = {
    indicators: false,
    scale: 0.9,
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          background: "rgb(86 86 86 / 85%)",
          position: "absolute",
          height: "577px",
          zIndex: "111",
        }}
      >
        <h2 className="h2_nav">we produce the most professional perfume</h2>
        <Link to="/about" style={{ color: "inherit", textDecoration: "none" }}>
          <button className="btn btn_header">
            Learn more <ArrowRightAltIcon />
          </button>
        </Link>
      </div>
      <Zoom {...zoomOutProperties} className="div_carousel">
        {images.map((each, index) => (
          <div key={index} style={{ width: "100%", height: "577px" }}>
            <img
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              src={each}
            />
          </div>
        ))}
      </Zoom>
    </>
  );
};

export default Slider;
