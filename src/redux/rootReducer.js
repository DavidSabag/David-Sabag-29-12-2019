import { combineReducers } from 'redux';
import cakeReducer from './cake/cakeReducer';
//import hederReducer from './Heder/hederReducer';

const rootReducers = combineReducers({
    cake: cakeReducer,
    //header: hederReducer
})

export default rootReducers;