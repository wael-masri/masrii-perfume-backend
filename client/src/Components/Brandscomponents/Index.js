import React, { useState } from "react";
import "./Style.css";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Title from "../Basictitle/Index";
import Carditem from "../Card/Index";
import SearchIcon from "@material-ui/icons/Search";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const Brandscomponents = (props) => {
  const [searchitem, setSearchitem] = useState("");

  const classes = useStyles();

  const [sidebrands, setSidebrands] = useState({
    isclick: false,
  });

  // function for brands categories showing
  const showcatbyname = () => {
    if (props.match.params.brand === "brand") {
      return (
        <>
          <div style={{ height: "100px" }}></div>
          <Title
            title={props.location.search.replace("?", "")}
            subtitle="latest fashion"
          />
          <div style={{ height: "100px" }}></div>
          <div className="container">
            <div className="row">
              {props.listitems.data
                .filter(
                  (person) =>
                    person.brand === props.location.search.replace("?", "")
                )
                .map((val, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <Carditem item={val} />
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      );
    } else if (props.match.params.brand === "qty") {
      const datainput = props.listitems.data.filter(
        (person) =>
          person.quantity === Number(props.location.search.replace("?", ""))
      );
      console.log(datainput);
      return (
        <>
          <div style={{ height: "100px" }}></div>
          <Title title="Brands" subtitle="latest fashion" />
          <div style={{ height: "100px" }}></div>
          <div className="container">
            <div className="row">
              {datainput.length === 0 && (
                <div className="col-md-12">
                  <h3 style={{ textAlign: "center", color: "#1111115c" }}>
                    NO DATA..
                  </h3>
                </div>
              )}

              {datainput &&
                datainput.map((val, index) => {
                  return (
                    <div className="col-md-4" key={index}>
                      <Carditem item={val} />
                    </div>
                  );
                })}
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="container-fluid big_div_brands">
      <div className="div_brands1">
        <h3 className="h3_title_side_brands">Brands</h3>
        <p className="p_side_brands">
          Each of us is unique;what we put should be unique to.this is why WM
          makes one of a kind perfume
        </p>

        <div className={classes.root}>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Brands</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="sidebarlist_brands">
                {props.categories &&
                  props.categories.map((valu, index) => {
                    return (
                      <li className="sidebaritem_brands" key={index}>
                        <Link
                          to={{
                            pathname: "/brands/brand",
                            search: valu.name,
                          }}
                          className="link_sidebar_brands"
                          onClick={() => setSidebrands({ isclick: true })}
                        >
                          {valu.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography className={classes.heading}>Quantity</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ul className="sidebarlist_brands">
                <li className="sidebaritem_brands">
                  <Link
                    to={{
                      pathname: "/brands/qty",
                      search: "100",
                    }}
                    className="link_sidebar_brands"
                    onClick={() => setSidebrands({ isclick: true })}
                  >
                    100 ML
                  </Link>
                </li>
                <li
                  className="sidebaritem_brands"
                  onClick={() => setSidebrands({ isclick: true })}
                >
                  <Link
                    to={{
                      pathname: "/brands/qty",
                      search: "200",
                    }}
                    className="link_sidebar_brands"
                  >
                    200 ML
                  </Link>
                </li>
                <li
                  className="sidebaritem_brands"
                  onClick={() => setSidebrands({ isclick: true })}
                >
                  <Link
                    to={{
                      pathname: "/brands/qty",
                      search: "300",
                    }}
                    className="link_sidebar_brands"
                  >
                    300 ML
                  </Link>
                </li>
                <li
                  className="sidebaritem_brands"
                  onClick={() => setSidebrands({ isclick: true })}
                >
                  <Link
                    to={{
                      pathname: "/brands/qty",
                      search: "400",
                    }}
                    className="link_sidebar_brands"
                  >
                    400 ML
                  </Link>
                </li>
                <li
                  className="sidebaritem_brands"
                  onClick={() => setSidebrands({ isclick: true })}
                >
                  <Link
                    to={{
                      pathname: "/brands/qty",
                      search: "500",
                    }}
                    className="link_sidebar_brands"
                  >
                    500 ML
                  </Link>
                </li>
                <li
                  className="sidebaritem_brands"
                  onClick={() => setSidebrands({ isclick: true })}
                >
                  <Link
                    to={{
                      pathname: "/brands/qty",
                      search: "750",
                    }}
                    className="link_sidebar_brands"
                  >
                    750 ML
                  </Link>
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className="div_brands2">
        {sidebrands.isclick === false && props.listitems && (
          <>
            <div style={{ height: "100px" }}></div>
            <Title title="All Brands" subtitle="latest fashion" />
            <div style={{ height: "100px" }}></div>
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <p>
                    <input
                      type="text"
                      className="input_search form-control"
                      placeholder="Search.."
                      onChange={(e) => setSearchitem(e.target.value)}
                    />{" "}
                    <SearchIcon />
                  </p>
                  <hr />
                </div>
                {props.listitems &&
                  props.listitems.data
                    .filter((val) => {
                      if (searchitem == "") {
                        return val;
                      } else if (
                        val.title
                          .toLowerCase()
                          .includes(searchitem.toLowerCase())
                      ) {
                        return val;
                      }
                    })
                    .map((val, index) => {
                      return (
                        <div className="col-md-4" key={index}>
                          <Carditem item={val} />
                        </div>
                      );
                    })}
              </div>
            </div>
          </>
        )}
        {props.listitems.data.length === 0 && (
          <div style={{ width: "100%", textAlign: "center" }}>
            <CircularProgress
              style={{ color: "#a07d5a", marginTop: "100px" }}
            />
          </div>
        )}

        {sidebrands.isclick && showcatbyname()}
      </div>
      <div style={{ height: "100px" }}></div>
    </div>
  );
};

export default Brandscomponents;
