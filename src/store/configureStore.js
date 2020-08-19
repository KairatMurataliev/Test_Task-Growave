import thunkMiddleware from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import reducer from './reducers/reducer'

import {saveState, loadState} from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
const persistedState = loadState();
const store = createStore(reducer, persistedState, enhancers);

store.subscribe(() => {
    saveState({
        countryData: store.getState().countryData,
        topRecovered: store.getState().topRecovered
    });
});

export default store;
