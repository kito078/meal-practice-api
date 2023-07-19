import React from "react";
import { Link } from "react-router-dom";

function MealItem({ meal }) {
  const { strCategory, strMealThumb, strInstructions, idMeal } = meal;
  //console.log(meal);

  return (
    <div>
      {strCategory}
      <img src={strMealThumb} alt="" />
      <p>{strInstructions}</p>
      <Link to={`meals/${idMeal}`}>
        <button>view more</button>
      </Link>
    </div>
  );
}

export default MealItem;
