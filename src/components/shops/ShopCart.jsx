import React, { useState } from "react";

const ShopCart = ({shopItems, addToCart }) => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      {shopItems.map((shopItems, addtoCart) => {
        return (
          <div className="box">
            <div className="product mtop">
              <div className="img">
                <span className="discount">% {shopItems.discount} Off</span>
                <img src={shopItems.cover} alt="img" />
                <div className="product-like">
                  <label>{count}</label>
                  <br />
                  <i
                    className="fa-regular fa-heart"
                    onClick={incrementCount}
                  ></i>
                </div>
              </div>
              <div className="product-details">
                <h3>{shopItems.name}</h3>
                <div className="rate">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="price">
                  <h4>${shopItems.price}</h4>
                  <button onClick={() => addToCart(shopItems)}>
                    <i className="fa fa-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default ShopCart;
