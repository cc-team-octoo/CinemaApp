import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import { StyledScreen } from './Styled';
import Room from './Room';
import ReservationFrom from './ReservationForm';
import Modal from './Modal';

class SeanceRoom extends Component {
    // const {id} = useParams();
    // console.log(id);

    constructor(props) {
        super(props);
        this.state = {
            taken: ['1A', '7C'],
            showModal: false
        }
    }

    onFormSubmit = formValues => {
        const {username, email} = formValues;
        console.log(`You made a reservation of seats: . Username: ${username} email address: ${email}`);
        this.setState({ showModal: true })
    }
    
    render() {
        return (
            <div>
                {this.state.showModal && <Modal />}
                <h1>Choose your seats for the movie</h1>
                <StyledScreen>screen</StyledScreen>
                <Room taken={this.state.taken}/>
                <ReservationFrom onFormSubmit={this.onFormSubmit} />
            </div>
        ) 
    }
};

export default SeanceRoom;
