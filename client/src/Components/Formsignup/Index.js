import React, { useEffect } from "react";
import "./Style.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import axios from "axios";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Formsignup = () => {
  //validation for form
  const validate = Yup.object({
    username: Yup.string().required("Required !"),
    email: Yup.string().email("Email is invalid").required("Required !"),
    password: Yup.string().required("Required !"),
    confirm: Yup.string()

      .oneOf([Yup.ref("password"), null], "Passwords must match")

      .required("Required !"),
  });
  //send register to data base
  const formsub = async (values) => {
    console.log(values);
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/users/register`, values);
      res && window.location.replace("/signin");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", confirm: "" }}
      onSubmit={formsub}
      validationSchema={validate}
    >
      <div className="container-fluid">
        <div style={{ height: "100px" }}></div>
        <div className="row ">
          <div className="col-md-6">
            <div
              className="row signupres"
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

          <div className="col-md-6 hero_signup first_signup">
            <h3 className="h3_signup">Sign Up</h3>
            <p
              style={{ letterSpacing: "2px", color: "#fff", marginTop: "30px" }}
            >
              If you have any comments, suggestions, or questions that you would
              like us to address, please don't hesitate to send us a message.
            </p>
            <Form>
              <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-md-12">
                  <label className="label_signup">Username</label>
                  <Field
                    type="text"
                    name="username"
                    className="form-control input_signup"
                    placeholder="Enter Your Username"
                  />
                  <ErrorMessage
                    component="div"
                    name="username"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <label className="label_signup">Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control input_signup"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <label className="label_signup">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control input_signup"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <label className="label_signup">Confirm Password</label>
                  <Field
                    type="password"
                    name="confirm"
                    className="form-control input_signup"
                    placeholder="Repeat Your Password"
                  />
                  <ErrorMessage
                    component="div"
                    name="confirm"
                    className="erorr"
                  />
                </div>

                <div className="col-md-12">
                  <button type="submit" className="btn btn_add">
                    <SendIcon /> Sign Up
                  </button>
                </div>
              </div>
            </Form>
          </div>
        </div>
        <div style={{ height: "100px" }}></div>
      </div>
    </Formik>
  );
};

export default Formsignup;
