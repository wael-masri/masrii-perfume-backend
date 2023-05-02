import React, { useState, useEffect } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

import MailOutlineIcon from "@material-ui/icons/MailOutline";
import payment from "../../Images/payment.png";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "100%",
    },
  },
}));

const Footer = () => {
  const [datacategories, setDatacategories] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/categories/`);
      setDatacategories(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  const [emailsub, setEmailsub] = useState("");

  const submitsub = async (e) => {
    e.preventDefault();
    const newsub = {
      email: emailsub,
    };
    try {
      const res = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/api/subscribes/add`, newsub);
      res && window.location.reload();
      setEmailsub("");
    } catch (err) {
      console.log(err);
    }
  };

  const classes = useStyles();

  return (
    <footer className="site-footer">
      <div className="container-fluid">
        <div className="row">
          <div className=" col-md-4">
            <h6>About Us</h6>
            <p className="text-justify p_footer">
              With 20 years of presence and expertise in the Middle East and the
              Gulf market, 85 stores across 9 countries (UAE, Kuwait, Saudi
              Arabia, Egypt, Lebanon, Qatar etc.) and an online presence.
            </p>
            <hr />
            <div className="info_footer">
              <LocationOnIcon style={{ color: "#a07d5a" }} />{" "}
              Lebanon,tripoli-mina
            </div>
            <div className="info_footer">
              <PhoneIcon style={{ color: "#a07d5a" }} /> 00961-71620485
            </div>
            <div className="info_footer">
              <AlternateEmailIcon style={{ color: "#a07d5a" }} />{" "}
              masri_1997@hotmail.com
            </div>
          </div>

          <div className="col-md-2">
            <h6>Categories</h6>
            <ul className="footer-links">
              {datacategories &&
                datacategories.map((valu) => {
                  return (
                    <Link
                      key={valu._id}
                      to={{
                        pathname: "/brands/brand",
                        search: valu.name,
                      }}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <li className="listitem_footer" key={valu._id}>
                        <ArrowRightAltIcon />
                        {valu.name}
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>

          <div className=" col-md-2">
            <h6>legal</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link to="#">
                  <ArrowRightAltIcon />
                  Privacy & Policy
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="#">
                  <ArrowRightAltIcon />
                  Payment Methods
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="#">
                  <ArrowRightAltIcon />
                  Delivery
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="#">
                  <ArrowRightAltIcon />
                  Return & Exchanges
                </Link>
              </li>
              {/* <li className="listitem_footer"><Link to="/loginadmin"><ArrowRightAltIcon />For Admin</Link></li> */}
            </ul>
          </div>
          <div className=" col-md-4">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li className="listitem_footer">
                <Link to="/about">
                  <ArrowRightAltIcon />
                  About Us
                </Link>
              </li>
              <li className="listitem_footer">
                <Link to="/brands/all">
                  <ArrowRightAltIcon />
                  Brands
                </Link>
              </li>

              <li className="listitem_footer">
                <Link to="/contact">
                  <ArrowRightAltIcon />
                  Contact Us
                </Link>
              </li>
            </ul>
            <div className="div_footer_sub">
              <label>
                Be the first to know about new arrivals, sales & promos!
              </label>
              <form onSubmit={submitsub}>
                <TextField
                  id="standard-basic"
                  label="Subscribe"
                  onChange={(e) => setEmailsub(e.target.value)}
                  required
                />
                <button className="btn_sub" type="submit">
                  <MailOutlineIcon
                    style={{ color: "#a07d5a", fontSize: "34px" }}
                  />
                </button>
              </form>
              <img alt="payment" src={payment} style={{ margin: "10px" }} />
            </div>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; 2021 All Rights Reserved by
              <a href="" target="_blank">
                {" "}
                WAEL MASRI.
              </a>
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a className="facebook" href="">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a className="twitter" href="">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a className="dribbble" href="">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a className="linkedin" href="">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
