import React, { useEffect } from "react";

function UserResults() {
  useEffect(() => {
    fetchMeals();
  }, []);
  const fetchMeals = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_MEAL_URL}/categories.php`
    );
    const data = await response.json();

    console.log(data);
  };
  return <div>results</div>;
}

export default UserResults;
