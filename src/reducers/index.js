import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    movies: moviesReducer,
    form: formReducer
})