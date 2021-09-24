export const ADD_DISH = 'ADD_DISH';
export const REMOVE_DISH= 'REMOVE_DISH';
export const SET_MODAL_OPEN = 'SET_MODAL_OPEN';
export const INIT_DISH_ORDER = 'INIT_DISH_ORDER';


export const addDish = (id) => ({type: ADD_DISH, id });
export const removeDish = (id) => ({type: REMOVE_DISH, id });
export const setModalOpen = isOpen => ({type: SET_MODAL_OPEN, payload: isOpen});