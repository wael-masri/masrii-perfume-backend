import React from "react";
import Formcart from "../Components/Formcart/Index";
import { connect } from "react-redux";

import {
  removeToCart,
  clearToCart,
  modifyCart,
} from "../Redux/Reducers/Actioncart";
const Cart = (props) => {
  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>

      <Formcart {...props} />
    </>
  );
};

export default connect(
  (state) => {
    return {
      listcart: state.cart,
      quantity_price: state.cart.reduce(
        (total, item) => total + parseInt(item.qty * item.new_price),
        0
      ),
    };
  },
  { removeToCart, clearToCart, modifyCart }
)(Cart);
