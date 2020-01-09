import React from 'react';
import { Link } from 'react-router-dom';

const screeningTimeButton = (props) => {
    const to = `/seats/${props.filmId}/${props.time.split(' ').join('')}`
    
    return (
        <Link to={to}>
            <button>{props.time}</button>
        </Link>
    )
};

export default screeningTimeButton;
