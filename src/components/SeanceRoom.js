import React from 'react';
import { useParams } from 'react-router-dom';
import Row from './Row';
import ReservationFrom from './ReservationForm'
import { StyledRoom, StyledScreen } from './Styled';

const SeanceRoom = () => {
    const {id} = useParams();
    console.log(id);
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