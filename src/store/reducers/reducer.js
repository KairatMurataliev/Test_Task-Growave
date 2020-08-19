import {GET_ONE_COUNTRY_DATA_SUCCESS,
    GET_ONE_COUNTRY_DATA_ERROR,
    GET_COUNTRIES_DATA_SUCCESS,
    GET_COUNTRIES_DATA_ERROR,
    GET_COUNTRIES_LIST_SUCCESS
} from "../actions/actionTypes";

const initialState = {
    countryData: null,
    list: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_COUNTRY_DATA_SUCCESS:
            return {...state, countryData: action.data};
        case GET_COUNTRIES_LIST_SUCCESS:
            return {...state, list: action.list};
        default:
            return state;
    }
};

export default reducer;
