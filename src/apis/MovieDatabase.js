import axios from 'axios';


export default axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=en-US&page=1
});