import React, { useState } from "react";
import "./Style.css";
import payment from "../../Images/payment.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Link } from "react-router-dom";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
const Singleitem = (props) => {
  console.log(props);
  const PF = "/";

  const [counter, setCounter] = useState(1);

  // increament quantity
  const inc = () => {
    let qty = counter + 1;
    setCounter(qty);
  };

  // increament quantity
  const dec = () => {
    if (counter > 1) {
      let qty = counter - 1;
      setCounter(qty);
    }
  };

  // if repeat order same info
  var istrue = false;
  const added = (single, counter) => {
    props.itemcartforexist.map((item2) => {
      if (item2.title === single.title) {
        istrue = true;
      }
    });
    if (istrue) {
      console.log("not added");
    } else {
      console.log(" added");
      //single.push({ quantity:12})
      let varia = { ...single, qty: counter };
      // console.log(" added",varia);
      props.addToCart(varia);
    }
  };

  var isbutton = false;
  const addbutton = (single, counter, _id) => {
    props.itemcartforexist.map((item2) => {
      if (item2.title === single.title) {
        isbutton = true;
      }
    });
    if (isbutton) {
      return (
        <>
          <button
            className="btn btn_remove_single"
            onClick={() => props.removeToCart(_id)}
          >
            REMOVE FROM CART
          </button>
          <p>This item added to cart, to modify click remove to cart !</p>
        </>
      );
    } else {
      return (
        <>
          <button
            className="btn btn_add_single"
            onClick={() => {
              added(single, counter);
            }}
          >
            Add To Cart
          </button>
        </>
      );
    }
  };

  //button inc and dec
  const buttonincdec = (counter, single) => {
    props.itemcartforexist.map((item2) => {
      if (item2.title === single.title) {
        isbutton = true;
      }
    });
    if (isbutton) {
      return <span> {counter} pieces </span>;
    } else {
      return (
        <div>
          <IndeterminateCheckBoxIcon
            onClick={() => dec()}
            style={{ color: "#a07d5a" }}
          />
          <span> {counter} pieces </span>
          <AddBoxIcon
            onClick={() => inc()}
            style={{ borderRadius: "50%" }}
          />
        </div>
      );
    }
  };

  const singleitem = () => {
    if (props.location.state) {
      let single = props.location.state;
      return (
        <div className="row">
          <div className="col-md-6">
            <img
              src={PF + single.image_link}
              alt="cover"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div
            className="col-md-6"
            style={{ background: "rgb(243, 242, 238)", textAlign: "center",margin: "15px 0px" }}
          >
            <h3 className="h3_single">{single.title}</h3>
            <p>{single.quantity} ML</p>
            {buttonincdec(counter, single)}
            <p className="desc_single">{single.description}</p>
            <span className="old_price">
              <del>${single.old_price}</del>
            </span>{" "}
            <span className="new_price">${single.new_price * counter}</span>
            <br />
            <br />
            <img src={payment} alt="cover" />
            <br />
            <br />
            {/* <button className='btn btn_add_single'>Add To Cart</button> */}
            {addbutton(single, counter, single._id)}
          </div>
        </div>
      );
    } else {
      return <p> Please select your item to show here !</p>;
    }
  };

  return (
    <>
      <div style={{ height: "100px", padding: "19px" }}>
        <div>
          <h3>
            <Link
              to="/brands/all"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              Item{" "}
            </Link>
            <ArrowForwardIosIcon />
            <span style={{ color: "#a07d5a" }}>
              {props.location.state && props.location.state.brand}
            </span>{" "}
          </h3>
        </div>
      </div>
      <div className="container-fluid">{singleitem()}</div>
    </>
  );
};

export default Singleitem;
