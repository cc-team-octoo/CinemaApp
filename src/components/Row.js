import React from 'react';
import Seat from './Seat';
import { StyledRow } from './Styled'

const Row = (props) => {
    let row = [];
    for (let i = 0; i < 10; i++) {
        row.push(
            <Seat 
                id={i+1} 
                key={`seat${i+1}`}
                rowName={props.rowName}>
            </Seat>);
    }
return <StyledRow rowName={props.rowName}>{row}</StyledRow>
};

export default Row;