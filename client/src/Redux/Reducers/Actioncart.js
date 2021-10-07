import {
  add_to_cart,
  delete_from_cart,
  clear_all_cart,
  modify_cart,
} from "./Typescart";
import React from "react";

// action function for add to cart
export const addToCart = (varia) => {
  const action = {
    type: add_to_cart,
    varia,
  };
  //  console.log("from action add",action);
  return action;
};

// remove to cart but not working now !!
export const removeToCart = (index) => {
  const action = {
    type: delete_from_cart,
    index,
  };
  console.log("from action remove", action);
  return action;
};

// clear all the cart items
export const clearToCart = () => {
  const action = {
    type: clear_all_cart,
  };
  console.log("from action clear", action);
  return action;
};

// modify  the cart items
export const modifyCart = (item, index) => {
  const action = {
    type: modify_cart,
    item,
    index,
  };
  console.log("from action update", action);
  return action;
};
