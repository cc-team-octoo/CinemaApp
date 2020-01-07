import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentFilmsReducer from './currentFilms';

export default combineReducers({
    form: formReducer,
    currentFilms: currentFilmsReducer
});
