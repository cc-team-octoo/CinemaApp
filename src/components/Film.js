import React from 'react';

class Film extends React.Component {

    render() {
        const film = this.props.film;
        return (
            <li>
                {/* <span><img src={film.poster_path} alt="" /></span> */}
                <span>{film.title}</span>
            </li>
        )
    }
}

export default Film;
