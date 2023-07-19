import React, { useContext, useEffect, useState } from "react";
import MealContext from "../hooks/MealContext";
import { useParams } from "react-router-dom";

function Meals() {
  const { meal, fetchMeal } = useContext(MealContext);

  //const { strMealThumb, strInstructions } = meal;
  //console.log(meal);

  const params = useParams();
  //console.log("mealid", params.idMeal);
  useEffect(() => {
    fetchMeal(params.idMeal);
  }, []);
  return (
    <div>
      {/* {meal &&
        meal.map((mealOne) => (
          <div>
            <img src={mealOne.strMealThumb} alt="" />
            {mealOne.strInstructions}
          </div>
        ))} */}
    </div>
  );
}

export default Meals;
