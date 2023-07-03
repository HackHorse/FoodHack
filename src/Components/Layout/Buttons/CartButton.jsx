import React, { useContext, useEffect, useState } from "react";
import Classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../../Store/Cart-Context";

const CartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = cartCtx.items
    ? cartCtx.items.reduce((num, item) => {
        return num + item.amount;
      }, 0)
    : 0;

  const btnClasses = `${Classes.button} ${
    btnIsHighlighted ? Classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={Classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={Classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
