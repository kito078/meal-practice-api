import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "./MealItem";

function UserResults() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log(meals);
  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MEAL_URL}/search.php?s=beef`
      );
      setMeals(response.data.meals);
      setLoading(false);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching meals:", error);
      // You can also update the state or show an error message to the user if needed
      // For example: setError("Failed to fetch meals. Please try again later.");
    }
  };

  if (!loading) {
    return (
      <div>
        {meals &&
          meals.map((meal) => <MealItem key={meal.idMeal} meal={meal} />)}
      </div>
    );
  } else {
    <div>loading...</div>;
  }
}

export default UserResults;
