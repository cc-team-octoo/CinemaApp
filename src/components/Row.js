import React from 'react';
import Seat from './Seat';

const Row = () => {
    let row = [];
    for (let i = 0; i < 10; i++) {
        row.push(
            <Seat 
                id={i+1} 
                key={i+1}>
            </Seat>);
    }
return <div>{row}</div>
};

export default Row;