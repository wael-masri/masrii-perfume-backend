import React from "react";
import img_about from "../../Images/about.jpg";
import img_about2 from "../../Images/about2.jpg";
import FingerprintIcon from "@material-ui/icons/Fingerprint";
import Title from "../Basictitle/Index";
import "./Style.css";
const Aboutheader = () => {
  return (
    <>
      <div className="container">
        <div style={{ height: "100px" }}></div>
        <div className="row">
          <div className="col-md-12" style={{ marginBottom: "30px" }}>
            <img alt="cover" src={img_about} className="img_about1" />
          </div>
          <div className="col-md-4">
            <h3>Who We Are ?</h3>
            <p>
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Who We Do ?</h3>
            <p>
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </p>
          </div>
          <div className="col-md-4">
            <h3>Why Choose Us</h3>
            <p>
              Contextual advertising programs sometimes have strict policies
              that need to be adhered too. Let’s take Google as an example.
            </p>
          </div>
        </div>
        <div style={{ height: "100px" }}></div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-6"
            style={{ background: "#f3f2ee", textAlign: "center" }}
          >
            <FingerprintIcon
              style={{
                fontSize: "62px",
                color: "#a07d5a",
                marginTop: "150px",
              }}
            />
            <p
              style={{
                padding: "15px 90px",
                fontStyle: "italic",
                letterSpacing: "2px",
                fontSize: "20px",
              }}
            >
              “Going out after work? Take your butane curling iron with you to
              the office, heat it up, style your hair before you leave the
              office and you won’t have to make a trip back home.”
            </p>
          </div>
          <div className="col-md-6" style={{ padding: "0px" }}>
            <img alt="cover" src={img_about2} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <Title title="Our Teams" subtitle="best team" />
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default Aboutheader;
