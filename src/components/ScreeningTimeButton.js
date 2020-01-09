import React from 'react';
import { Link } from 'react-router-dom';

const ScreeningTimeButton = (props) => {
    const to = `/seats/${props.filmId}/${props.time.split(' ').join('')}`
    
    return (
        <Link to={to}>
            <button onClick={props.handleClick}>{props.time}</button>
        </Link>
    )
};

export default ScreeningTimeButton;
