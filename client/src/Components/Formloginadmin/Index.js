import React from "react";
import "./Style.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";

const Formloginadmin = () => {
  return (
    <div className="container-fluid">
      <div style={{ height: "100px" }}></div>
      <div className="row">
        <div className="col-md-6">
          <div
            className="row"
            style={{
              position: "absolute",
              right: "-29px",
              top: "80px",
              zIndex: "111",
            }}
          >
            <div className="col-md-6" style={{ padding: "0px" }}>
              <div
                style={{
                  textAlign: "center",
                  height: "260px",
                  background: "#111111",
                  width: "300px",
                  margin: "5px 5px 5px auto",
                }}
              >
                <LocationOnIcon
                  style={{
                    color: "#a07d5a",
                    marginTop: "60px",
                    fontSize: "51px",
                  }}
                />
                <p
                  style={{
                    color: "#737373",
                    marginTop: "40px",
                    fontSize: "21px",
                  }}
                >
                  Lebanon,tripoli-mina
                </p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  height: "260px",
                  background: "#111111",
                  width: "300px",
                  margin: "10px 5px 5px auto",
                }}
              >
                <EmailIcon
                  style={{
                    color: "#a07d5a",
                    marginTop: "60px",
                    fontSize: "51px",
                  }}
                />
                <p
                  style={{
                    color: "#737373",
                    marginTop: "40px",
                    fontSize: "21px",
                  }}
                >
                  masri_1997@hotmail.com
                </p>
              </div>
            </div>

            <div className="col-md-6" style={{ padding: "0px" }}>
              <div
                style={{
                  textAlign: "center",
                  height: "260px",
                  background: "#111111",
                  width: "300px",
                  margin: "5px auto 5px 5px",
                }}
              >
                <CallIcon
                  style={{
                    color: "#a07d5a",
                    marginTop: "60px",
                    fontSize: "51px",
                  }}
                />
                <p
                  style={{
                    color: "#737373",
                    marginTop: "40px",
                    fontSize: "21px",
                  }}
                >
                  00961-71620485
                </p>
              </div>
              <div
                style={{
                  textAlign: "center",
                  height: "260px",
                  background: "#111111",
                  width: "300px",
                  margin: "10px auto 5px 5px",
                }}
              >
                <QueryBuilderIcon
                  style={{
                    color: "#a07d5a",
                    marginTop: "60px",
                    fontSize: "51px",
                  }}
                />
                <p
                  style={{
                    color: "#737373",
                    marginTop: "40px",
                    fontSize: "21px",
                  }}
                >
                  Sun - Thur: 9am - 5pm
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 hero_adminlogin first_adminlogin">
          <h3 className="h3_adminlogin">Sign In For Only Admin</h3>
          <p style={{ letterSpacing: "2px", color: "#fff", marginTop: "30px" }}>
            If you have any comments, suggestions, or questions that you would
            like us to address, please don't hesitate to send us a message.
          </p>
          <form>
            <div className="row" style={{ marginTop: "50px" }}>
              <div className="col-md-12">
                <label className="label_adminlogin">Username</label>
                <input
                  type="text"
                  name="name"
                  className="form-control input_adminlogin"
                  placeholder="Enter Your Username"
                />
              </div>
              <div className="col-md-12">
                <label className="label_adminlogin">Password</label>
                <input
                  type="text"
                  name="name"
                  className="form-control input_adminlogin"
                  placeholder="Enter Your Password"
                />
              </div>

              <div className="col-md-12">
                <button type="submit" className="btn btn_adminlogin">
                  <SendIcon /> Sign In
                </button>
                <br />
                <br />

                <div style={{ background: "rgb(160 125 90 / 30%)" }}>
                  <p style={{ padding: "10px 7px", color: "#fff" }}>
                    New to Masri Perfume?
                    <Link
                      to="/admin/posts"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      sign in.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Formloginadmin;
