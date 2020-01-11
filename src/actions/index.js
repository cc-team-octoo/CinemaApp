import MovieDatabase from '../apis/MovieDatabase';

export const fetchCurrentFilms = () => async dispatch => {
    const response = await MovieDatabase.get();
    console.log(await response.data.results);

    const createMovie = function (movie) {
        fetch("http://localhost:8000/api/movies", {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                name: movie.title,
                overview: movie.overview,
                hoursArray: [4, 6.5, 9]
            })
        })
    }
    async function createMovieBase(data) {
        let generatedResponse = []
        await Promise.all(data.map(async (elem) => {
            try {
                let insertResponse = await createMovie(elem)
                generatedResponse.push(insertResponse)
            } catch (error) {
                console.log('error' + error);
            }
        }))
    }
    createMovieBase(response.data.results)
    dispatch({
        type: 'FETCH_CURRENT_FILMS_SUCCESS',
        payload: response.data.results
    });
}

export const setFilmToBook = filmId => (
    {
        type: 'FILM_TO_BOOK_CHOSEN',
        payload: filmId
    }
);

export const setFilmTitleToBook = filmTitle => (
    {
        type: 'FILM_TITLE_CHOSEN',
        payload: filmTitle
    }
);

export const setTimeOfBooking = time => (
    {
        type: 'TIME_OF_BOOKING_CHOSEN',
        payload: time
    }
);

export const addTakenSeat = seatId => (
    {
        type: 'ADD_TAKEN_SEAT',
        payload: seatId
    }
);

export const removeTakenSeat = seatId => (
    {
        type: 'REMOVE_TAKEN_SEAT',
        payload: seatId
    }
);

export const resetTakenSeats = () => (
    {
        type: 'RESET_TAKEN_SEATS'
    }
);
