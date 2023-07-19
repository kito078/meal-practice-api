import { createContext, useEffect, useReducer } from "react";
import mealReducer from "./MealReducer";
import axios from "axios";
import { useParams } from "react-router-dom";

const MealContext = createContext();

const MEAL_URL = process.env.REACT_APP_MEAL_URL;

export const MealProvider = ({ children }) => {
  const initiialState = {
    meals: [],
    meal: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(mealReducer, initiialState);

  // useEffect(() => {
  //   fetchMeals();
  // }, []);

  //FETCH MEALS
  const fetchMeals = async (text) => {
    try {
      // const params = new URLSearchParams({
      //   q: text,
      // });
      setLoading();
      const response = await axios.get(`${MEAL_URL}/search.php?s=${text}`);
      const data = response.data.meals;
      // console.log(data);
      //   setMeals(data);

      dispatch({
        type: "GET_MEALS",
        payload: data,
      });

      //setLoading(false);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching meals:", error);
      // You can also update the state or show an error message to the user if needed
      // For example: setError("Failed to fetch meals. Please try again later.");
    }
  };

  //FETCH MEALS
  const fetchMeal = async (idMeal) => {
    try {
      // const params = new URLSearchParams({
      //   q: text,
      // });
      setLoading();
      const response = await axios.get(`${MEAL_URL}/lookup.php?i=${idMeal}`);
      const data = response.data.meals;
      const items = data.map((item) => ({ ...item }));
      console.log(items);
      //   setMeals(data);

      dispatch({
        type: "GET_MEAL",
        payload: data,
      });

      //setLoading(false);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching meals:", error);
      // You can also update the state or show an error message to the user if needed
      // For example: setError("Failed to fetch meals. Please try again later.");
    }
  };

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  return (
    <MealContext.Provider
      value={{
        meals: state.meals,
        meal: state.meal,
        loading: state.loading,
        fetchMeals,
        fetchMeal,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
