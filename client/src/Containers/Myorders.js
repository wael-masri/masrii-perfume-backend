import React, { useEffect, useState } from "react";

import CircularProgress from "@material-ui/core/CircularProgress";
import axios from "axios";
import Title from "../Components/Basictitle/Index";
import VisibilityIcon from "@material-ui/icons/Visibility";

export default function Myorders() {
  const [datamyorders, setDatamyorders] = useState([]);

  //GET DATA FROM DATABASE
  useEffect(() => {
    const fetch = async () => {
      const storedClicks = await JSON.parse(
        localStorage.getItem("account_masriparfume")
      );
      console.log("userid", storedClicks._id);
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/orders/?user_id=${storedClicks._id}`);
      setDatamyorders(res.data);
      console.log(datamyorders);
    };
    fetch();
  }, []);

  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>
      <div style={{ height: "100px" }}></div>
      <Title title="My Orders" subtitle="ALL ORDERS" />
      <div style={{ height: "100px" }}></div>
      <div className="container">
        {datamyorders.length === 0 && (
          <div style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress
              style={{ color: "#a07d5a", marginTop: "100px" }}
            />
          </div>
        )}
        {datamyorders.length > 0 && (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Shipping Order</th>
                <th scope="col">Order Notes</th>
                <th scope="col">Items</th>
                <th scope="col">Date Created</th>
              </tr>
            </thead>

            <tbody>
              {datamyorders.map((valu) => {
                return (
                  <tr key={valu._id}>
                    <th scope="row">{valu.name}</th>
                    <td>{valu.phone}</td>
                    <td>{valu.shippingorder}</td>
                    <td>{valu.ordernotes}</td>
                    <td>
                      <VisibilityIcon
                        style={{ color: "#a07d5a" }}
                        data-toggle="modal"
                        data-target={"#" + valu._id}
                      />
                    </td>
                    <td>{new Date(valu.createdAt).toDateString()}</td>

                    <div
                      className="modal fade"
                      id={valu._id}
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
                              Total{" "}
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
                          <div className="modal-body">
                            {valu.items &&
                              valu.items.map((value) => {
                                return (
                                  <div
                                    className="container-fluid"
                                    key={value._id}
                                  >
                                    <div className="row">
                                      <div
                                        className="col-md-12"
                                        style={{
                                          borderBottom: "2px solid",
                                          height: "75px",
                                        }}
                                      >
                                        <div className="row">
                                          <div className="col-md-6">
                                            <p style={{ marginBottom: "0px" }}>
                                              {value.title} qty:{value.quantity}
                                            </p>
                                            <p
                                              style={{
                                                fontWeight: "500",
                                                color: "#a07d5a",
                                              }}
                                            >
                                              {value.brand}
                                            </p>
                                          </div>
                                          <div className="col-md-3">
                                            <p style={{ margin: "revert" }}>
                                              {value.qty} pieces
                                            </p>
                                          </div>
                                          <div className="col-md-3">
                                            <p style={{ margin: "revert" }}>
                                              ${value.new_price * value.qty}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                          <div className="modal-footer">
                            <button
                              type="button"
                              className="btn btn-secondary"
                              data-dismiss="modal"
                            >
                              Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
      <div style={{ height: "100px" }}></div>
    </>
  );
}
