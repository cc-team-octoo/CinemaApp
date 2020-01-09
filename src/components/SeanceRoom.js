import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import { StyledScreen } from './Styled';
import Room from './Room'
import ReservationFrom from './ReservationForm';

class SeanceRoom extends Component {
    // const {id} = useParams();
    // console.log(id);

    constructor(props) {
        super(props);
        this.state = {taken: ['1A', '7C']}
    }

    onFormSubmit = formValues => {
        console.log(`You made a reservation of seats: . Username: ${formValues.username} email address: ${formValues.email}`)
    }
    
    render() {
        return (
            <div>
                <h1>Choose your seats for the movie</h1>
                <StyledScreen>screen</StyledScreen>
                <Room taken={this.state.taken}/>
                <ReservationFrom onFormSubmit={this.onFormSubmit} />
            </div>
        ) 
    }
};

export default SeanceRoom;