import React from "react";
import ScreeningTimeButton from "./ScreeningTimeButton";
import { connect } from 'react-redux';
import { setFilmToBook, setTimeOfBooking, setFilmTitleToBook } from '../actions';

const mapDispatchToProps = {
    setFilmToBook,
    setTimeOfBooking,
    setFilmTitleToBook
}

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    screeningTimeList = ['4:00 PM', '6:30 PM', '9:00 PM'];

    handleClick(e) {
        this.props.setFilmToBook(this.props.film.id);
        this.props.setTimeOfBooking(e.target.innerText);
        this.props.setFilmTitleToBook(this.props.film.title);
    }

    render() {
        const {film} = this.props;
        const src = `https://image.tmdb.org/t/p/w300/${film.poster_path}`
        return (
            <li>
                <span><img src={src} alt="" /></span>
                <span>{film.title}</span>
                <span>{film.overview}</span>
                <span>Book a ticket:
                  <span>
                    {
                        this.screeningTimeList.map((screening, i) => (
                            <ScreeningTimeButton key={i} time={screening} filmId={film.id} handleClick={this.handleClick}/>
                        ))
                    }
                  </span>
                </span>
            </li>
        )
    }
}

export default connect(null, mapDispatchToProps)(Film);
