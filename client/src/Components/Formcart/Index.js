import React, { useState, useEffect } from "react";
import "./Style.css";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";
import { isLogin } from "../../Privatepublicrouter/Utils";
const Formcart = (props) => {
  var total_prices = 0;

  console.log("statt", props.listcart);
  const [change, setChange] = useState(1);
  // increament quantity
  const inc = () => {
    let newqty = change + 1;
    setChange(newqty);
  };

  // increament quantity
  const dec = () => {
    if (change > 1) {
      let newqty = change - 1;
      setChange(newqty);
    }
  };

  return (
    <div className="container-fluid big_div_cart">
      <div className="div_cart">
        <div className="container">
          <div className="row">
            <div
              className="col-md-12"
              style={{ background: "rgb(243, 242, 238)", padding: "20px" }}
            >
              <div className="row">
                <div className="col-md-4">
                  <span className="title_cart">PRODUCT</span>
                </div>
                <div className="col-md-4">
                  <span className="title_cart">QUANTITY</span>
                </div>
                <div className="col-md-4">
                  <span className="title_cart">TOTAL</span>
                </div>
              </div>
            </div>

            {props.listcart.length === 0 && (
              <div
                className="col-md-12"
                style={{
                  borderBottom: "1px solid rgb(17 17 17 / 14%)",
                  padding: "35px 20px",
                  height: "100px",
                }}
              >
                <div className="row">
                  <div className="col-md-4">
                    <p style={{ marginBottom: " 0px" }}>Title</p>
                    <p className="bold">0 ML</p>
                  </div>
                  <div className="col-md-4">0 pc</div>
                  <div className="col-md-4">
                    <span style={{ float: "left" }} className="bold">
                      $0
                    </span>{" "}
                    <span style={{ float: "right" }}>
                      <EditIcon style={{ color: "#a07d5a" }} />{" "}
                      <HighlightOffIcon />
                    </span>
                  </div>
                </div>
              </div>
            )}
            {props.listcart &&
              props.listcart.map((value, index) => {
                total_prices = total_prices + value.new_price;
                return (
                  <div
                    className="col-md-12 rescart"
                    style={{
                      borderBottom: "1px solid rgb(17 17 17 / 14%)",
                      padding: "35px 20px",
                      height: "100px",
                    }}
                    key={index}
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <p style={{ marginBottom: " 0px" }}>{value.title}</p>
                        <p className="bold">{value.quantity} ML</p>
                      </div>
                      <div className="col-md-4">{value.qty} pc</div>
                      <div className="col-md-4">
                        <span style={{ float: "left" }} className="bold">
                          ${value.new_price * value.qty}
                        </span>{" "}
                        <span style={{ float: "right" }}>
                          <EditIcon
                            style={{ color: "#a07d5a" }}
                            data-toggle="modal"
                            data-target={"#exampleModalCenter" + value._id}
                          />{" "}
                          <HighlightOffIcon
                            onClick={() => {
                              props.removeToCart(value._id);
                            }}
                          />
                        </span>
                      </div>
                    </div>
                    {/* modal */}
                    <div
                      className="modal fade"
                      id={"exampleModalCenter" + value._id}
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="exampleModalCenterTitle"
                      aria-hidden="true"
                    >
                      <div
                        className="modal-dialog modal-dialog-centered"
                        role="document"
                      >
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5
                              className="modal-title"
                              id="exampleModalLongTitle"
                            >
                              {value.title}
                            </h5>
                            <button
                              type="button"
                              className="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          {/* <Form > */}
                          <div className="modal-body">
                            <p className="card-text">{value.description}</p>
                            <p className="card-text">
                              initial price: ${value.new_price * value.qty}
                            </p>
                            <p className="card-text">
                              new price: ${value.new_price * change}
                            </p>

                            <span className="card-text"> QTY: </span>
                            <br />
                            <button
                              onClick={() => dec()}
                              className="btn btn-success mr-3"
                            >
                              -
                            </button>
                            <span>{change}</span>
                            <button
                              onClick={() => inc()}
                              className="btn btn-success ml-3"
                            >
                              +
                            </button>

                            {/* <ErrorMessage component='div' name='quantity' className='erorr' /> */}
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => {
                                let newitemcart = value;
                                newitemcart.qty = change;
                                props.modifyCart(newitemcart, index);
                                setChange(1);
                              }}
                              data-dismiss="modal"
                            >
                              EDIT
                            </button>
                          </div>
                          {/* </Form > */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

            <div className="col-md-12">
              <button
                className="btn btn_empty"
                onClick={() => {
                  props.clearToCart();
                }}
              >
                EMPTY CART
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="div_placeorder">
        <div className="div_total_side_cart">
          <h4 className="h4_total_cart">CART TOTAL</h4>
          <div className="item_total">
            <span>Subtotal</span>
            <span style={{ float: "right", color: "#a07d5a" }}>
              {props.quantity_price}$
            </span>
          </div>

          <div className="item_total">
            <span>Total</span>
            <span style={{ float: "right", color: "#a07d5a" }}>
              {props.quantity_price}$
            </span>
          </div>

          {isLogin() === false && (
            <>
              <Link
                to="/order"
                style={{ color: "inherit", TextDecoration: "none" }}
              >
                <button
                  className="btn btn_placeorder form-control"
                  disabled="true"
                >
                  Place Order
                </button>
              </Link>
              <p className="p_total_side">
                Login or Create an account to make order.
              </p>
            </>
          )}
          {isLogin() && (
            <>
              <Link
                to="/order"
                style={{ color: "inherit", TextDecoration: "none" }}
              >
                <button className="btn btn_placeorder form-control">
                  Place Order
                </button>
              </Link>
              <p className="p_total_side">Make order now.</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Formcart;
