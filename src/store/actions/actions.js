import axios from '../../api-path';
import {NotificationManager} from 'react-notifications';
import {GET_COUNTRIES_DATA_ERROR,
    GET_COUNTRIES_DATA_SUCCESS,
    GET_ONE_COUNTRY_DATA_ERROR,
    GET_ONE_COUNTRY_DATA_SUCCESS,
    GET_COUNTRIES_LIST_SUCCESS
} from "./actionTypes";

const getCountriesListSuccess = (list) => ({type: GET_COUNTRIES_LIST_SUCCESS, list});

export const getCountiesList = () => {
    return async dispatch => {
        try {
            const response = await axios.get('/countries');
            let list = [];
            for(let country of response.data) {
                const countryObject = {
                    country: country.Country,
                    slug: country.Slug
                };
                list.push(countryObject)
            }
            dispatch(getCountriesListSuccess(list));
        } catch (e) {
            NotificationManager.error('Error', e.response.data.message)
        }
    }
};


const getOneCountryDataSuccess = data => ({type: GET_ONE_COUNTRY_DATA_SUCCESS, data});

export const getOneCountryData = slug => {
    return async dispatch => {
        try {
            const response = await axios.get(`/total/dayone/country/${slug}`);
            const data = response.data.slice(Math.max(response.data.length - 5, 1));
            console.log(data);
            dispatch(getOneCountryDataSuccess(data))
        } catch (e) {
            NotificationManager.error('Error', e.response.data.message)
        }
    }
};
