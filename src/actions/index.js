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