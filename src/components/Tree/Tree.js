import React, { useState } from "react";
import ShakeButton from "../ShakeButton/ShakeButton";
import "./Tree.css";

function Tree(props) {
  const [shaking, setshake] = useState(false);

  const ShakeTree = () => {
    setshake(true);
    setTimeout(() => setshake(false), 3000);
    setTimeout(() => {
      props.fall();
    }, 3000);
  };

  let treeImage = "../../../public/images/tree.webp";
  return (
    <div>
      <div className="containerTree">
        <img
          src={treeImage}
          className={`treeImg ${shaking ? "shake" : null}`}
        />
      </div>
      <ShakeButton shake={ShakeTree} />
    </div>
  );
}

export default Tree;
