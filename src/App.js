import React, { useState } from "react";
import Header from "./common/Cart/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Pages from "./pages/Pages";
import Data from "./components/Data";
import Cart from "./common/Cart/Cart/Cart";
import Sdata from "./components/shops/SData";
import Footer from "./common/Cart/footer/Footer";

const App = () => {
  //Step 1: Fetch data from the Data base  //
  const { productItems } = Data;
  const { shopItems }  = Sdata
 
  const [cartItem, setCardItem] = useState([]);

  //Add to cart //
  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };


  //Decrease Quenty for the Cart products
  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);

    //for remove the minus button
    if (productExit.qty === 1) {
      setCardItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                cartItem={cartItem}
                shopItems={shopItems}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                cartItem={cartItem}
                addToCart={addToCart}
                decreaseQty={decreaseQty}
              />
            }
          ></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
};

export default App;
