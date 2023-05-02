import React from "react";
import "./Style.css";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import CallIcon from "@material-ui/icons/Call";
import EmailIcon from "@material-ui/icons/Email";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import SendIcon from "@material-ui/icons/Send";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import axios from "axios";

const Formcontact = () => {
  //validation for form
  const validate = Yup.object({
    name: Yup.string().required("Required !"),
    phone: Yup.string().required("Required !"),
    email: Yup.string()
      .required("Required !")
      .email("Please enter valid email.."),
    message: Yup.string().required("Required !"),
  });

  //send register to data base
  const formsub = async (values, { resetForm }) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/messages/add`, values);
      NotificationManager.success("Message has been sent..", "THANK YOU");
      res && resetForm();
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
            className="row dispalynoneres"
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

        <div
          className="col-md-6"
          style={{ background: "#a07d5a", height: "700px", padding: "60px" }}
        >
          <h3 style={{ letterSpacing: "2px", color: "#fff" }}>Contact Us</h3>
          <p style={{ letterSpacing: "2px", color: "#fff", marginTop: "30px" }}>
            If you have any comments, suggestions, or questions that you would
            like us to address, please don't hesitate to send us a message.
          </p>
          <Formik
            initialValues={{ name: "", phone: "", email: "", message: "" }}
            onSubmit={formsub}
            validationSchema={validate}
          >
            <Form>
              <div className="row" style={{ marginTop: "50px" }}>
                <div className="col-md-12">
                  <label className="label_send">Name</label>
                  <Field
                    type="text"
                    name="name"
                    className="form-control input_send"
                    placeholder="Enter Your Name"
                  />
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="erorr_contact"
                  />
                </div>
                <div className="col-md-6">
                  <label className="label_send">Phone</label>
                  <Field
                    type="number"
                    name="phone"
                    className="form-control input_send"
                    placeholder="(00961)-12121212"
                  />
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="erorr_contact"
                  />
                </div>
                <div className="col-md-6">
                  <label className="label_send">Email</label>
                  <Field
                    type="text"
                    name="email"
                    className="form-control input_send"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="erorr_contact"
                  />
                </div>
                <div className="col-md-12">
                  <label className="label_send">Message</label>

                  <Field
                    name="message"
                    placeholder="Something.."
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className="form-control input_send"
                        placeholder="Message.."
                      ></textarea>
                    )}
                  />
                  <ErrorMessage
                    component="div"
                    name="message"
                    className="erorr_contact"
                  />
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn_send">
                    <SendIcon /> Send Message
                  </button>
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

export default Formcontact;
