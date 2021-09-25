import axiosApi from '../../axiosApi';

export const FETCH_MENU_REQUEST = 'FETCH_MENU_REQUEST';
export const FETCH_MENU_SUCCESS = 'FETCH_MENU_SUCCESS';
export const FETCH_MENU_FAILURE = 'FETCH_MENU_FAILURE';
export const FETCH_MENU_POST = 'FETCH_COUNTER_POST';

export const fetchMenuRequest = () => ({ type: FETCH_MENU_REQUEST });
export const fetchMenuSuccess = dishes => ({ type: FETCH_MENU_SUCCESS, dishes });
export const fetchMenuFailure = (error) => ({type: FETCH_MENU_FAILURE , payload: error});
export const fetchMenuPost = () => ({type: FETCH_MENU_POST})

export const fetchDishMenu = () => {
    return async (dispatch , getState) => {
        try {   
            dispatch(fetchMenuRequest());
            const response = await axiosApi.get('pizzaTypes.json');

            const dishes = Object.keys(response.data).map(id => ({
                ...response.data[id],
                id
            }));

            dispatch(fetchMenuSuccess(dishes));
        } catch (e) {
            dispatch(fetchMenuFailure());
        }
    };
};   

