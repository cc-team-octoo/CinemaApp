import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=9a818d2dabb5a1bab0d8d69cd979f026&language=en-US&page=1'
});