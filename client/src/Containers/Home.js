import React from "react";
import { connect } from "react-redux";
import Bestseller from "../Components/Bestseller/Index";
import Imagefixed from "../Components/Fixedimage/Index";
import Partners from "../Components/Partners/Index";
import Slider from "../Components/slider/Index";

const Home = (props) => {
  console.log(props.listitems.data);
  return (
    <div>
      <Slider />
      <Bestseller {...props} />
      <Imagefixed />
      <Partners />
    </div>
  );
};

export default connect((state) => {
  return {
    listitems: state.items,
  };
})(Home);
