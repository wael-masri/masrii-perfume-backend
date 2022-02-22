import React from "react";
import "./Style.css";
import Slider from "react-slick";
import img from "../../Images/partner/partner01.jpg";
import part2 from "../../Images/partner/partner02.jpg";
import part3 from "../../Images/partner/partner03.jpg";
import part4 from "../../Images/partner/partner04.jpg";
import part5 from "../../Images/partner/partner05.jpg";
import part6 from "../../Images/partner/partner06.jpg";
import part7 from "../../Images/partner/partner07.jpg";
import part8 from "../../Images/partner/partner08.jpg";
import part9 from "../../Images/partner/partner09.jpg";

const Partners = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <Slider {...settings}>
            <div className="div_partner">
              <img src={img} alt="partner" className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part2} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part3} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part4} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part5} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part6} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part7} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part8} className="img_partner" />
            </div>
            <div className="div_partner">
              <img alt="partner" src={part9} className="img_partner" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Partners;
