import {combineReducers} from "redux";

import { routerReducer as routing } from 'react-router-redux';
import test from './test';

export default () => {
    return combineReducers({
        test,
        routing
    });
};