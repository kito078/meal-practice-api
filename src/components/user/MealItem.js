import React from "react";

function MealItem({ meal }) {
  const { strCategory, strMealThumb } = meal;
  return (
    <div>
      {strCategory}
      <img src={strMealThumb} alt="" />
    </div>
  );
}

export default MealItem;
