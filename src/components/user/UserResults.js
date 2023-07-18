import React, { useEffect, useState } from "react";
import axios from "axios";

function UserResults() {
  const [meals, setMeals] = useState([]);
  console.log(meals);
  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    axios
      .get(`${process.env.REACT_APP_MEAL_URL}/categories.php`)
      .then((response) => setMeals(response.data));
  };

  return <div>results</div>;
}

export default UserResults;
