import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Brandscomponents from "../Components/Brandscomponents/Index";
import axios from "axios";
const Brands = (props) => {
  const [datacategories, setDatacategories] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get(`${process.env.REACT_APP_URL_BACKEND}/api/categories/`);
      setDatacategories(res.data);
      console.log(res.data);
    };
    fetch();
  }, []);

  return (
    <>
      <div style={{ height: "238px", background: "#a07d5a" }}></div>
      <Brandscomponents {...props} categories={datacategories} />
    </>
  );
};

export default connect((state) => {
  return {
    listitems: state.items,
  };
})(Brands);
