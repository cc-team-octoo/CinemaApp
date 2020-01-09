import MovieDatabase from '../apis/MovieDatabase';

export const fetchCurrentFilms = () => async dispatch => {
    const response = await MovieDatabase.get();
    console.log(await response.data);

    dispatch({ type: 'FETCH_CURRENT_FILMS_SUCCESS', payload: response.data.results});
};
