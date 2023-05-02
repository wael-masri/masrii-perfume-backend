import React from "react";
import "./Style.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from "axios";
import { isLogin } from "../../Privatepublicrouter/Utils";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const Formorder = (props) => {
  //validation for form
  const validate = Yup.object({
    name: Yup.string().required("Required !"),
    phone: Yup.string().required("Required !"),
    shippingorder: Yup.string().required("Required !"),
    ordernotes: Yup.string().required("Required !"),
  });
  //send register to data base
  const formsub = async (values) => {
    if (props.arrayitem.length > 0) {
      const storedClicks = await JSON.parse(
        localStorage.getItem("account_masriparfume")
      );

      const neworder = {
        items: props.arrayitem,
        name: values.name,
        phone: values.phone,
        shippingorder: values.shippingorder,
        ordernotes: values.ordernotes,
        user_id: storedClicks._id,
      };

      try {
        const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/orders/add`, neworder);
        props.clearToCart();
        NotificationManager.info("Order has been created successfully..");
        res && window.location.replace("/");
      } catch (err) {
        console.log(err);
      }
    } else {
      //alert("Please select items for buy..");
      NotificationManager.info("Please select items for buy..");
    }
  };

  return (
    <Formik
      initialValues={{ name: "", phone: "", shippingorder: "", ordernotes: "" }}
      onSubmit={formsub}
      validationSchema={validate}
    >
      <Form>
        {isLogin() === false && (
          <h3 style={{ textAlign: "center" }}>
            PLEASE LOGIN TO COMPLETE THE ORDER..
          </h3>
        )}
        {isLogin() && (
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-6 div_desc_order">
                  <p className="p_desc_order">
                    You have chosen {props.totalquantity} of our products at a
                    price of ${props.totalprice}.<br />
                    If you want to change, you can
                    <span style={{ color: "#a07d5a" }}> go back now.</span>
                  </p>
                </div>
                <div className="col-md-12">
                  <h3 className="h3_order_title">BILLING DETAILS</h3>
                  <hr />
                </div>

                <div className="col-md-6">
                  <label className="mt-3">Full Name</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="form-control"
                  />
                  <ErrorMessage component="div" name="name" className="erorr" />
                </div>
                <div className="col-md-6">
                  <label className="mt-3">Phone</label>
                  <Field
                    type="number"
                    name="phone"
                    placeholder="Enter your number"
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <label className="mt-3">Shipping Order</label>
                  <Field
                    type="text"
                    name="shippingorder"
                    placeholder="Enter your address"
                    className="form-control"
                  />
                  <ErrorMessage
                    component="div"
                    name="shippingorder"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <label className="mt-3">Order Notes</label>
                  <Field
                    name="ordernotes"
                    placeholder="Something.."
                    render={({ field }) => (
                      <textarea {...field} className="form-control" rows={4}>
                        {" "}
                      </textarea>
                    )}
                  />

                  <ErrorMessage
                    component="div"
                    name="ordernotes"
                    className="erorr"
                  />
                </div>
                <div className="col-md-12">
                  <button className="btn btn_finalorder mt-3" type="submit">
                    Place Order
                  </button>
                </div>

                <div style={{ height: "100px" }}></div>
              </div>

              <NotificationContainer />
            </div>
          </>
        )}
      </Form>
    </Formik>
  );
};

export default Formorder;
