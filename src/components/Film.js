import React from 'react';

class Film extends React.Component {

    render() {
        const film = this.props.film;
        const src = `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        return (
            <li>
                <span><img src={src} alt="" /></span>
                <span>{film.title}</span>
                <span>{film.overview}</span>
            </li>
        )
    }
}

export default Film;
