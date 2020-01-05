import React from 'react';
import Seat from './Seat';

const Row = () => {
    let row = [];
    for (let i = 0; i < 10; i++) {
    row.push(<Seat id={i} key={i}>{i}</Seat>);
    }
return <div>{row}</div>
};

export default Row;