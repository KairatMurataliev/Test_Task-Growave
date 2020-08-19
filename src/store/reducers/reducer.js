import {GET_ONE_COUNTRY_DATA_SUCCESS, GET_ONE_COUNTRY_DATA_ERROR, GET_COUNTRIES_DATA_SUCCESS, GET_COUNTRIES_DATA_ERROR} from "../actions/actionTypes";

const initialState = {
    countryData: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_COUNTRY_DATA_SUCCESS:
            return {...state, countryData: action.data};
        default:
            return state;
    }
};

export default reducer;
