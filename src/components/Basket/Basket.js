import React, { useState } from "react";
import "./Basket.css";
import Apple from "../Apple/Apple";
function Basket() {
  const [basketApple, setBasketApple] = useState(false);

  const visibleApple = () => {
    setBasketApple(true);
    setTimeout(() => setBasketApple(false), 6000);
  };

  const basketImage = "../../../public/images/basket.jpg";
  const appleImage = "../../../public/images/apple.png";

  return (
    <div>
      <Apple visible={visibleApple} />
      <div className="containerBasket">
        <img src={basketImage} className="basketImg" />
        <img
          src={appleImage}
          className={`basketapple1 ${basketApple ? "vBasketapple" : null}`}
        />
        <img
          src={appleImage}
          className={`basketapple2 ${basketApple ? "vBasketapple" : null}`}
        />
        <img
          src={appleImage}
          className={`basketapple3 ${basketApple ? "vBasketapple" : null}`}
        />
      </div>
    </div>
  );
}

export default Basket;
