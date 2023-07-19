import React, { useContext, useState } from "react";
import MealContext from "../../hooks/MealContext";

function SearchMeal() {
  const [text, setText] = useState("chicken");

  const { fetchMeals } = useContext(MealContext);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
      alert("please enter text");
    } else {
      fetchMeals(text);
      // console.log(text);
      setText("");
    }
  };
  return (
    <div className="text-center py-6">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search food"
          onChange={handleChange}
          value={text}
        />
        <button type="submit">search</button>
      </form>
    </div>
  );
}

export default SearchMeal;
