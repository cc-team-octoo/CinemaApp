import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import currentFilmsReducer from './currentFilms';
import bookedFilm from './bookedFilm';
import bookingTime from './bookingTime';
import takenSeats from './takenSeats';

export default combineReducers({
    form: formReducer,
    currentFilms: currentFilmsReducer,
    bookedFilm,
    bookingTime,
    takenSeats
});
