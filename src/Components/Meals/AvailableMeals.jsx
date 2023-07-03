import React from "react";
import DUMMY_MEALS from "../../DummyData/Dummy_Data";
import Classes from "./Meal.module.css";
import Card from "../UI/Card";
import MealItems from "./MealItems/MealItems";

const AvailableMeals = () => {
  return (
    <section className={Classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((item) => (
            <MealItems
              key={item.id}
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
