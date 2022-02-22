import React from "react";
import Singleitem from "../Components/Singleitem/Index";
import { connect } from "react-redux";
import { addToCart, removeToCart } from "../Redux/Reducers/Actioncart";
const Item = (props) => {
  console.log(props);
  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>
      <Singleitem {...props} />
    </>
  );
};

export default connect(
  (state) => {
    return {
      itemcartforexist: state.cart,
    };
  },
  { addToCart, removeToCart }
)(Item);
