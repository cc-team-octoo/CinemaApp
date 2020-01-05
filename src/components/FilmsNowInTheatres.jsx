import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';
import { fetchCurrentFilms } from '../actions';
import Film from './Film';

function mapStateToProps(state) {
    return {
        currentFilms: state.currentFilms
    }
}

const mapDispatchToProps = {
    fetchCurrentFilms
}

class FilmsNowInTheatresConnected extends Component {
    fetchFilms = async () => {
        try {
            const fetchedFilms = await Axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_THE_MOVIE_DB_API_KEY}&language=en-US&page=1`);
            if (fetchedFilms.status === 200) {
                console.log(await fetchedFilms.data.results);
                this.props.fetchCurrentFilms(fetchedFilms.data.results);
                // this.props.fetchCurrentFilms('asfasf');
            }
            else {
                throw Error('Data on films could not be retrieved.');
            }
        }
        catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.fetchFilms()
    }

    render() {
        const currentFilms = this.props.currentFilms;
        return (
            <ol>
                {currentFilms.map(film => (<Film film={film} />))}
            </ol>
        )
    }
}

const FilmsNowInTheatres = connect(mapStateToProps, mapDispatchToProps)(FilmsNowInTheatresConnected);
export default FilmsNowInTheatres;
