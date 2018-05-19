import {FETCH_CATEGORY_SUCCESS} from "../actions/actionTypes";


const initialState = {
    categories: []
};


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_CATEGORY_SUCCESS:
            return {...state, categories: action.categories};
        default:
            return state;
    }
};

export default reducer;