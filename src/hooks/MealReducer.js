const mealReducer = (state, action) => {
  switch (action.type) {
    case "GET_MEALS":
      return {
        ...state,
        meals: action.payload,
      };
    default:
      return {
        state,
      };
  }
};

export default mealReducer;
