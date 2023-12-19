import React, { useState } from "react";
import Slider from "react-slick";
import './style.css';


//for making aarrow on slider
const NextArrow = (props) => {
  
  const {onClick} = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="next">
        <i className="fa fa-long-arrow-right"></i>
      </button>
    </div>
  )
}
const PrevArrow = (props) => {
  const {onClick} = props
  return (
    <div className="control-btn" onClick={onClick}>
      <button className="prev">
        <i className="fa fa-long-arrow-left"></i>
      </button>
    </div>
  )
}
//for making aarrow on slider

const FlashCard = ({ productItems ,addToCart}) => {
  const [count , setCount] = useState(0);
  
  const incrementCount = () => { setCount (count + 1) }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow : <NextArrow />,
    prevArrow : <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          
        }
      },
    ]
  };
  return (
    <>
      <Slider {...settings} >
        {productItems.map((productItems,addtoCart) => {
          return (
            <div className="box2">
              <div className="product mtop">
                <div className="img">
                  <span className="discount">
                    % {productItems.discount} Off
                  </span>
                  <img src={productItems.cover} alt="img" />
                  <div className="product-like">
                  <label>{count}</label><br/>
                    <i className="fa-regular fa-heart" onClick={incrementCount}></i>
                  </div>
                </div>
                <div className="product-details">
                  <h3>{productItems.name}</h3>
                  <div className="rate">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </div>
                  <div className="price">
                    <h4>${productItems.price}</h4>
                    <button onClick={() => addToCart(productItems)}>
                      <i className="fa fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </>
  );
};
export default FlashCard;
