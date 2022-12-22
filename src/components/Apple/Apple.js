import React, { useState } from "react";
import "./Apple.css";
import Tree from "../Tree/Tree";

function Apple(props) {
  const [fallApple1, setFallApple1] = useState(false);
  const [fallApple2, setFallApple2] = useState(false);
  const [fallApple3, setFallApple3] = useState(false);

  const fallApples = () => {
    setFallApple1(true);
    setFallApple2(true);
    setFallApple3(true);
    setTimeout(() => setFallApple1(false), 5000);
    setTimeout(() => setFallApple2(false), 6000);
    setTimeout(() => setFallApple3(false), 7000);
    setTimeout(() => {
      props.visible();
    }, 4000);
  };

  const appleImage = "../../../public/images/apple.png";

  return (
    <div>
      <Tree fall={fallApples} />
      <div>
        <img src={appleImage} className="appleImg1" />
        <img src={appleImage} className="appleImg2" />
        <img
          src={appleImage}
          className={`appleImg3 ${fallApple1 ? "fallAppl1" : null}`}
        />
        <img
          src={appleImage}
          className={`appleImg4 ${fallApple2 ? "fallAppl2" : null}`}
        />
        <img src={appleImage} className={`appleImg5 `} />
        <img src={appleImage} className={`appleImg6 `} />
        <img
          src={appleImage}
          className={`appleImg7 ${fallApple3 ? "fallAppl3" : null}`}
        />
      </div>
    </div>
  );
}

export default Apple;
