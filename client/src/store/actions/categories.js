import axios from '../../axios-api';
import {FETCH_CATEGORY_SUCCESS} from "./actionTypes";



export const fetchCategorySuccess = categories => {
    return {type: FETCH_CATEGORY_SUCCESS, categories}
};

export const fetchGetThisCategoryItems = (id) => {
    return dispatch => {
        return axios.get('/category?item=' + id).then(
            response => dispatch(fetchCategorySuccess(response.data))
        );
    }
};
