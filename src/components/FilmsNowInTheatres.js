import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentFilms } from '../actions';
import Film from './Film';

const select = state => {
    return {
        currentFilms: state.currentFilms
    }
}

class FilmsNowInTheatres extends Component {
    componentDidMount() {
     this.props.fetchCurrentFilms();
    }

    render() {
        const currentFilms = this.props.currentFilms;
        return (
            <React.Fragment>
                <h1>Movie List</h1>
                <ol>
                    { currentFilms.map(film => (
                        <Film key={film.title} film={film} />
                    )) }
                </ol>
            </React.Fragment>
        )
    }

}

export default connect(select, { fetchCurrentFilms })(FilmsNowInTheatres);
