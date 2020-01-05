import { createStore } from 'redux';
import { combineReducers } from 'redux';
import currentFilmsReducer from './currentFilms';

const reducers = combineReducers({
    currentFilms: currentFilmsReducer
});

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
