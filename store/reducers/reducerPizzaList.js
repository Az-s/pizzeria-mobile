import {
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
    FETCH_MENU_FAILURE,
    FETCH_MENU_POST,
  } from "../actions/PizzaListactions";
  
  const initialState = {
    dishes: [],
    error: null,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_MENU_REQUEST:
        return { ...state};
      case FETCH_MENU_SUCCESS:
        return { ...state, dishes: action.dishes };
      case FETCH_MENU_FAILURE:
        return { ...state, error: action.payload };
      case FETCH_MENU_POST:
        return { ...state, shows: action.payload };
      default:
        return state;
    }
  };
  
  export default reducer;