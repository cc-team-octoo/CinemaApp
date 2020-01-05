import React from 'react';

const Film = (props) => {
    const details = props.film

    return (
        <li>
            <span><img src={details.poster_path} alt=""/></span>
            <span>{details.title}</span>
        </li>
    )
}

export default Film;
