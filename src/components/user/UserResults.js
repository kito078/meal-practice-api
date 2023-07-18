import React, { useEffect } from "react";
import axios from "axios";

function UserResults() {
  useEffect(() => {
    fetchMeals();
  }, []);
  const fetchMeals = async () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((response) => console.log(response.data));
  };
  return <div>results</div>;
}

export default UserResults;
