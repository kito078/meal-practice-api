import React, { useEffect, useState } from "react";
import MealContext from "../hooks/MealContext";
import { useParams } from "react-router-dom";

function Meals() {
  const { meal, fetchMeal } = useState(MealContext);

  // const {id}

  const params = useParams();
  useEffect(() => {
    fetchMeal(params.idMeal);
  }, []);
  return <div>meals</div>;
}

export default Meals;
