import {FETCH_ITEMS_SUCCESS} from "../actions/actionTypes";


const initialState = {
    items: []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_ITEMS_SUCCESS:
            console.log(action.items);
            return {...state, items: action.items};
        default:
            return state;
    }
};

export default reducer;