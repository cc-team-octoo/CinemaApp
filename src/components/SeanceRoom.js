import React from 'react';
import Row from './Row';
import { StyledRoom } from './Styled';

const SeanceRoom = () => {
    let room = [];
    let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let i = 0; i < 8; i++) {
        room.push(<Row rowName={rows[i]}/>)
    };

    return <StyledRoom>{room}</StyledRoom>
};

export default SeanceRoom;