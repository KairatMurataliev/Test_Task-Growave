import thunkMiddleware from "redux-thunk";
import {applyMiddleware, createStore, compose} from "redux";
import reducer from './reducers/reducer'
// import usersReducer from "./reducers/usersReduces";
//
// import {saveState, loadState} from "./localStorage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(applyMiddleware(thunkMiddleware));
// const persistedState = loadState();
const store = createStore(reducer, enhancers);

// store.subscribe(() => {
//     saveState({
//         users: store.getState().users
//     });
// });

export default store;
