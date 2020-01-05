import { combineReducers } from 'redux';
import currentFilmsReducer from './currentFilms';

export default combineReducers({
    currentFilms: currentFilmsReducer
});


