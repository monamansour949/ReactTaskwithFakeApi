import {createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './reducers/conbineRed';

const store = createStore(combineReducer,composeWithDevTools());


export default store;

