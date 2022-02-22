import React, { useState } from "react";
import "./Style.css";
import img_side from "../../Images/side_page.jpg";
import Title from "../Basictitle/Index";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

import Carditem from "../Card/Index";

const useStyles_acco = makeStyles((theme) => ({
  root_accor: {
    width: "100%",
  },
  heading_accor: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    color: "#a07d5a",
  },
}));

const Bestseller = (props) => {
  const [searchitem, setSearchitem] = useState("");
  const classes_side = useStyles_acco();
  return (
    <div className="big_div_seller container-fluid">
      <div className="div_seller1">
        <div className="container">
          <div style={{ height: "100px" }}></div>
          <Title title="Best Sellers" subtitle="latest fashion" />
          <div style={{ height: "100px" }}></div>

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
                    return val.brand === "Boss";
                  } else if (
                    val.title.toLowerCase().includes(searchitem.toLowerCase())
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
          <div style={{ height: "100px" }}></div>
        </div>
      </div>

      <div className="div_seller2">
        <h3 className="title_side_page">ABOUT ME</h3>
        <img src={img_side} alt="photo" className="img_side_page" />
        <p className="p_side_page">
          Time to get picky! At FACES, buying fragrance is a multi-sensory
          experience. Express yourself with a perfume that matches your
          personality from our top brands such as Yves Saint Laurent, Gucci and
          Dior.
          <br /> Leave your mark, or in this case your scent, anywhere you go
          with the best-smelling, beautifully bottled perfumes online in the
          UAE. Browse through our well-curated selection of fragrance products
          and perfume in Dubai and Abu Dhabi available in a wide variety of
          forms and formulas today.
        </p>
      </div>
    </div>
  );
};

export default Bestseller;
