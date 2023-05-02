import React from "react";
import "./Style.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { login } from "../../Privatepublicrouter/Utils";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";

const Formsignin = () => {
  //validation for form
  const validate = Yup.object({
    username: Yup.string().required("Required !"),
    password: Yup.string().required("Required !"),
  });

  //send register to data base
  const formsub = async (values) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/users/login`, values);
      res &&
        res.data.username &&
        localStorage.setItem("account_masriparfume", JSON.stringify(res.data));
      res && res.data.username && login();
      res && res.data.username && window.location.replace("/");
      res &&
        res.data.message &&
        NotificationManager.error(
          "username and password not correctly..",
          "Oops!",
          5000
        );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="container-fluid">
      <div style={{ height: "100px" }}></div>
      <div className="row">
        <div className="col-md-6">
          <div
            className="row signinres"
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

        <div className="col-md-6 hero_signin first_signin">
          <h3 className="h3_signin">Sign In</h3>
          <p style={{ letterSpacing: "2px", color: "#fff", marginTop: "30px" }}>
            If you have any comments, suggestions, or questions that you would
            like us to address, please don't hesitate to send us a message.
          </p>
          <Formik
            initialValues={{ username: "", password: "" }}
            onSubmit={formsub}
            validationSchema={validate}
          >
            <Form>
              <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-md-12">
                  <label className="label_add">Username</label>
                  <Field
                    type="text"
                    name="username"
                    className="form-control input_add"
                    placeholder="Enter Your Username"
                  />
                  <ErrorMessage
                    component="div"
                    name="username"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <label className="label_add">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control input_add"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="erorr"
                  />
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn btn_add">
                    <SendIcon /> Sign In
                  </button>
                  <br />
                  <br />

                  <div style={{ background: "rgb(160 125 90 / 30%)" }}>
                    <p style={{ padding: "10px 7px", color: "#fff" }}>
                      New to Masri Perfume?
                      <Link
                        to="/signup"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Create an account.
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
      <div style={{ height: "100px" }}></div>
      <NotificationContainer />
    </div>
  );
};

export default Formsignin;
