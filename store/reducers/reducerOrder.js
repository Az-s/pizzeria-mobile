import { ADD_DISH, REMOVE_DISH, SET_MODAL_OPEN } from "../actions/OrderActions";

const initialState = {
  items: {},
  showPurchaseModal: false,
};

const reducerOrderInfo = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DISH:
      let newCount = 1;

      if (action.id in state.items) {
        newCount = state.items[action.id] + 1;
      }

      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: newCount
        }
      };
    case REMOVE_DISH:
      return {
        ...state,
        items: {
          ...state.items,
          [action.id]: 0
        }
      };
    case SET_MODAL_OPEN:
      return {
        ...state, showPurchaseModal: action.payload
      };
    default:
      return state;
  }
};

export default reducerOrderInfo;