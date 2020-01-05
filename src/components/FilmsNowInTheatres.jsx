import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrentFilms } from '../actions';

class FilmsNowInTheatres extends Component {
    componentDidMount() {
     this.props.fetchCurrentFilms();
 }

 render() {
     return <h1>Movie List</h1>;
 }

}


export default connect(null, { fetchCurrentFilms })(FilmsNowInTheatres);

