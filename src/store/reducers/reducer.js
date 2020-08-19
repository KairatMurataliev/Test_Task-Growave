import {
    GET_ONE_COUNTRY_DATA_SUCCESS,
    GET_COUNTRIES_LIST_SUCCESS, SHOW_TOP_RECOVERED,
    SHOW_NO_DATA_MODAL
} from "../actions/actionTypes";

const initialState = {
    countryData: null,
    list: null,
    topRecovered: null,
    showModal: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_COUNTRY_DATA_SUCCESS:
            return {...state, countryData: action.data};
        case GET_COUNTRIES_LIST_SUCCESS:
            return {...state, list: action.list};
        case SHOW_TOP_RECOVERED:
            return {...state, topRecovered: action.top};
        case SHOW_NO_DATA_MODAL:
            return {...state, showModal: true, countryData: null};
        default:
            return state;
    }
};

export default reducer;
