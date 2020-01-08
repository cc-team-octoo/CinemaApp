import React from 'react';
import ScreeningTimeButton from './ScreeningTimeButton';

class Film extends React.Component {
    screeningTimeList = ['4:00 PM', '6:30 PM', '9:00 PM'];

    render() {
        const {film} = this.props;
        const src = `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        return (
            <li>
                <span><img src={src} alt="" /></span>
                <span>{film.title}</span>
                <span>{film.overview}</span>
                <span>Book a ticket:
                    {
                        this.screeningTimeList.map((screening, i) => (
                            <ScreeningTimeButton key={i} time={screening} filmId={film.id}/>
                        ))
                    }
                </span>
            </li>
        )
    }
}

export default Film;
