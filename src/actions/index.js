export const fetchCurrentFilms = (currentFilms) => {
    console.log("Fetching");
    console.log(currentFilms);
    return {
        type: 'FETCH_CURRENT_FILMS_SUCCESS',
        payload: currentFilms   
    }
}