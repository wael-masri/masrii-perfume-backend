import React from "react";
import Formorder from "../Components/Formorder/Index";
import { connect } from "react-redux";
import { clearToCart } from "../Redux/Reducers/Actioncart";
const Order = (props) => {
  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>
      <Formorder {...props} />
    </>
  );
};

export default connect(
  (state) => {
    return {
      arrayitem: state.cart,
      totalquantity: state.cart.reduce(
        (total, item) => total + parseInt(item.qty),
        0
      ),
      totalprice: state.cart.reduce(
        (total, item) => total + parseInt(item.qty * item.new_price),
        0
      ),
    };
  },
  { clearToCart }
)(Order);
