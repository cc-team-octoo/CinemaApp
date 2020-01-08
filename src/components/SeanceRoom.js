import React from 'react';
import Row from './Row';
import { StyledRoom } from './Styled';
import ReservationFrom from './ReservationForm'

const SeanceRoom = () => {
    let room = [];
    let rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']
    for (let i = 0; i < 8; i++) {
        room.push(<Row 
            key={`row${i}`}
            rowName={rows[i]}/>)
    };

    return (
        <div>
            <StyledRoom>{room}</StyledRoom>
            <ReservationFrom />
        </div>
    )     
};

export default SeanceRoom;