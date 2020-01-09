import React from 'react';
import Row from './Row';
import { StyledRoom, StyledScreen } from './Styled';
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
            <h1>Choose your seats for the movie</h1>
            <StyledScreen>screen</StyledScreen>
            <StyledRoom>{room}</StyledRoom>
            <ReservationFrom />
        </div>
    )     
};

export default SeanceRoom;