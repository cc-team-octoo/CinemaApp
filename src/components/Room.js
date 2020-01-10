import React from 'react';
import Row from './Row';
import { StyledRoom } from './Styled';

const Room = (props) => {
    let room = [];
    let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let i = 0; i < 8; i++) {
        room.push(<Row 
            key={`row${i}`}
            rowName={rows[i]}
            taken={props.taken}/>)
    };
    return (
        <StyledRoom>{room}</StyledRoom>
    );
};

export default Room;
