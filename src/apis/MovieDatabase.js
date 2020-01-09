import axios from 'axios';


export default axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/now_playing?api_key=c2a3bc12e5a28aefbab1bbb6777a765b&language=en-US&page=1`
});