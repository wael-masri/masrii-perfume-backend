import React from "react";
import { Link } from "react-router-dom";
import img from "../../Images/logo2.png";
import noimage from "../../Images/noimage.jpg";
import "./Style.css";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Badge, IconButton } from "@material-ui/core";
import { isLogin, logout } from "../../Privatepublicrouter/Utils";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LocalMallIcon from "@material-ui/icons/LocalMall";

const Navbar = (props) => {
  const DB = "/";
  const lougoutmenu = () => {
    logout();
    localStorage.removeItem("account_masriparfume");
    window.location.replace("/");
  };

  if (isLogin()) {
    var storedClicks = JSON.parse(localStorage.getItem("account_masriparfume"));
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="row" style={{ width: "100%" }}>
          <div className="col-md-12 ">
            <ul className="list_nav_media">
              <li className="list_nav_media_item">
                <a className="media_nav" href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="list_nav_media_item">
                <a className="media_nav" href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="list_nav_media_item">
                <a className="media_nav" href="">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="list_nav_media_item">
                <a className="media_nav" href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>

            <ul className="list-sign">
              <li className="list_sign_item">
                {!isLogin() && (
                  <Link to="/signin" className="signin_nav">
                    SIGN IN{" "}
                  </Link>
                )}
                {isLogin() && (
                  <>
                    <div className="dropdown">
                      <a
                        className="btn_drop"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        {storedClicks.profilepic && (
                          <img
                            alt="profile"
                            src={DB + storedClicks.profilepic}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        )}
                        {!storedClicks.profilepic && (
                          <img
                            alt="profile"
                            src={noimage}
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "50%",
                            }}
                          />
                        )}

                        <DragIndicatorIcon />
                      </a>

                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <Link className="dropdown-item" to="/profile">
                          <AccountCircleIcon /> Profile
                        </Link>
                        <Link className="dropdown-item" to="/myorders">
                          <LocalMallIcon /> My Orders
                        </Link>
                        <div
                          className="dropdown-item"
                          onClick={() => lougoutmenu()}
                          style={{ color: "red" }}
                        >
                          <ExitToAppIcon /> Logout
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </li>
              {/* <li className="list_sign_item">
                <SearchIcon className="searchicon" />
              </li> */}
              <li className="list_sign_item">
                <Link
                  to="/cart"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <IconButton color="inherit">
                    <Badge badgeContent={props.quantity} color="secondary">
                      <ShoppingCartIcon className="searchicon" />
                    </Badge>
                  </IconButton>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-12" style={{ textAlign: "center" }}>
            <a className="navbar-brand" href="#">
              <img src={img} alt="logo" className="logo_nav" />
            </a>
          </div>

          <div className="col-md-12 ">
            <button
              className="navbar-toggler "
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
              style={{ textAlign: "center" }}
            >
              <ul className="navbar-nav mr-auto nav_colorres">
                <li className="nav-item ">
                  <Link className="nav-link btn_nav from-center  " to="/">
                    HOME <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn_nav from-center " to="/about">
                    ABOUT
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link btn_nav from-center"
                    to="/brands/all"
                  >
                    BRANDS
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link btn_nav from-center " to="/contact">
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default connect((state) => {
  return {
    quantity: state.cart.reduce((total, item) => total + parseInt(item.qty), 0),
  };
})(Navbar);
