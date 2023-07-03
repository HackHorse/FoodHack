import React from "react";
import Classes from "./Header.module.css";
import FoodImage from "../../Assets/Images/foodheader.jpg";
import CartButton from "../Buttons/CartButton";

const Header = (props) => {
  return (
    <>
      <header className={Classes.header}>
        <h1>FoodHack</h1>
        <CartButton onClick={props.onShowCart} />
      </header>
      <div className={Classes["main-image"]}>
        <img src={FoodImage} alt="foodHeader" />
      </div>
    </>
  );
};

export default Header;
