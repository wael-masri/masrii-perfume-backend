import React from "react";

import { bake_cookie, read_cookie } from "sfcookies";
// type of action
import {
  add_to_cart,
  clear_all_cart,
  delete_from_cart,
  modify_cart,
} from "./Typescart";

//initioal state of reducer items
const initial = [];

//reducer item
const Reducercart = (state = initial, action) => {
  state = read_cookie("added");
  //for add to cart
  if (action.type == add_to_cart) {
    let new_state = [...state, action.varia];
    bake_cookie("added", new_state);
    return new_state;
  }
  //modify cart item
  else if (action.type == modify_cart) {
    let new_state = state;
    new_state[action.index] = action.item;

    bake_cookie("added", new_state);

    // console.log("modify from reducer", new_state);
    return new_state;
  }

  //for delete item but not working
  else if (action.type == delete_from_cart) {
    const item_remove = action.index;
    let new_state1 = state;
    // console.log("from reduce1", new_state1);
    // console.log("from reduce remove id", item_remove);
    let new_state = new_state1.filter((ele) => ele._id !== item_remove);
    // console.log("from reducer2", new_state);
    bake_cookie("added", new_state);
    return new_state;
  }
  // clear all from cart
  else if (action.type == clear_all_cart) {
    let new_state = state;
    new_state = [];
    bake_cookie("added", new_state);
    return new_state;
  } else {
    return state;
  }
};

export default Reducercart;
