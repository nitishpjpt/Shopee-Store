import React from "react";
import Ndata from "./Ndata";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Cart = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay : true,     
      };
  return (
    <>
        <Slider {...settings}>
        {Ndata.map((val, index) => {
          return (
            <div className="content grid product">
            <div className="box" key={index}>
              <div className="img">
                <img src={val.cover} alt="" />
              </div>
              <h4>{val.name}</h4>
              <span>${val.price}</span>
            </div>
      </div>
          );
        })}
    </Slider>
    </>
  );
};

export default Cart;
