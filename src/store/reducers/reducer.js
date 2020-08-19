import {
    GET_ONE_COUNTRY_DATA_SUCCESS,
    GET_COUNTRIES_LIST_SUCCESS, SHOW_TOP_RECOVERED,
} from "../actions/actionTypes";

const initialState = {
    countryData: null,
    list: null,
    topRecovered: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_COUNTRY_DATA_SUCCESS:
            return {...state, countryData: action.data};
        case GET_COUNTRIES_LIST_SUCCESS:
            return {...state, list: action.list};
        case SHOW_TOP_RECOVERED:
            return {...state, topRecovered: action.top};
        default:
            return state;
    }
};

export default reducer;
