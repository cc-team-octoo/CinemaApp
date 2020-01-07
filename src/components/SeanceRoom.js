import React from 'react';
import Row from './Row'

const SeanceRoom = () => {
    let room = [];
    for (let i = 0; i < 8; i++) {
        room.push(<Row/>)
    }

    return <div>{room}</div>
};

export default SeanceRoom;