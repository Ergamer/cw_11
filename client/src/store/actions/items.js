import axios from '../../axios-api';
import {FETCH_ITEMS_SUCCESS} from "./actionTypes";


export const fetchItemsSuccess = items => {
  return {type: FETCH_ITEMS_SUCCESS, items}
};

export const fetchGetItem = () => {
    return dispatch => {
        return axios.get('/items').then(
            response => dispatch(fetchItemsSuccess(response.data))
        );
    }
};

export const fetchAddNewItem = (id, token) => {
    return dispatch => {
        return axios.post('/items', {item: id}, {headers: {'Token': token}}).then(res => console.log(res.data))
    }
};
