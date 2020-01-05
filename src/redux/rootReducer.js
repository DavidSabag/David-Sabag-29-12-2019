import { combineReducers } from 'redux';
//import cakeReducer from './cake/cakeReducer';
//import forcastsReducer from './forcasts/forcastsReducer';
import productsReducers from './products/productsReducers';

const rootReducers = combineReducers({
    //cake: cakeReducer,
    //forcasts: forcastsReducer,
    products: productsReducers
})

export default rootReducers;