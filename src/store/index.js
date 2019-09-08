import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk';
import {state} from './../reducers/state';

/*const initialState = {
  'array' : [{name: "Adolfo",
edad: 15},
{name:"Aldemaro",
edad: 30}]
};*/

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(state,composeEnhancers(applyMiddleware(thunk)));

/*export const store = createStore(state,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());*/