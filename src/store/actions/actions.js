import axios from '../../api-path';
import {GET_COUNTRIES_DATA_ERROR, GET_COUNTRIES_DATA_SUCCESS, GET_ONE_COUNTRY_DATA_ERROR, GET_ONE_COUNTRY_DATA_SUCCESS} from "./actionTypes";

const getOneCountryData = id => {
    return async dispatch => {
        try {
            const response = await axios.get('');
        } catch (e) {

        }
    }
};
