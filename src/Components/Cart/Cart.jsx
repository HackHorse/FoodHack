import React, { useContext } from "react";
import Classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../Store/Cart-Context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartTotalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItems = cartCtx.items.map((items) => (
    <CartItem
      key={items.id}
      name={items.name}
      amount={items.amount}
      price={items.price}
      onRemove={cartItemRemoveHandler.bind(null, items.id)}
      onAdd={cartItemAddHandler.bind(null, items)}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <ul className={Classes["cart-items"]}>{cartItems}</ul>
      <div className={Classes.total}>
        <span>Total Amount</span>
        <span>{cartTotalAmount}</span>
      </div>
      <div className={Classes.actions}>
        <button className={Classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {cartCtx.items.length > 0 ? (
          <button className={Classes.button}> Order </button>
        ) : (
          ""
        )}
      </div>
    </Modal>
  );
};

export default Cart;
