import MovieDatabase from '../apis/MovieDatabase';

export const fetchCurrentFilms = () => async dispatch => {
    const response = await MovieDatabase.get();
    console.log(await response.data);

    dispatch({ type: 'FETCH_CURRENT_FILMS_SUCCESS', payload: response.data.results});
};

export const setFilmToBook = (filmId) => (
    {
        type: 'FILM_TO_BOOK_CHOSEN',
        payload: filmId
    }
);

export const setTimeOfBooking = (time) => (
    {
        type: 'TIME_OF_BOOKING_CHOSEN',
        payload: time
    }
);

export const setTakenSeats = (takenSeats) => (
    {
        type: 'GET_TAKEN_SEATS',
        payload: takenSeats
    }
);
