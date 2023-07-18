import { createContext, useReducer } from "react";
import mealReducer from "./MealReducer";

const MealContext = createContext();

export const MealProvider = ({ children }) => {
  const initiialState = {
    meals: [],
  };

  const [state, dispatch] = useReducer(mealReducer, initiialState);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MEAL_URL}/search.php?s=beef`
      );
      const data = response.data.meals;
      //   setMeals(data);

      dispatch({
        type: "GET_MEALS",
        payload: data,
      });

      setLoading(false);
    } catch (error) {
      // Handle the error here
      console.error("Error fetching meals:", error);
      // You can also update the state or show an error message to the user if needed
      // For example: setError("Failed to fetch meals. Please try again later.");
    }
  };

  return (
    <MealContext.Provider value={{ meals: state.meals }}>
      {children}
    </MealContext.Provider>
  );
};

export default MealContext;
