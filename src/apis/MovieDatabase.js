import axios from 'axios';


export default axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/now_playing?api_key=link&language=en-US&page=1`
});