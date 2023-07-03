import React, { useRef, useState } from "react";
import Classes from "./MealItem.module.css";
import Input from "../../UI/Input";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountInNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountInNumber < 1 ||
      enteredAmountInNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountInNumber);
  };
  return (
    <form className={Classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "0",
          max: "10",
          step: "1",
          default: "0",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default MealForm;
