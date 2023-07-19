import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";
import MealContext from "../../hooks/MealContext";

function UserResults() {
  // const [meals, setMeals] = useState([]);
  // const [loading, setLoading] = useState(true);

  const { meals, loading } = useContext(MealContext);

  //console.log(meals);

  if (!loading) {
    return (
      <div>
        {meals &&
          meals.map((meal) => <MealItem key={meal.idMeal} meal={meal} />)}
        code
      </div>
    );
  } else {
    <div>loading...</div>;
  }
}

export default UserResults;
