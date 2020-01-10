import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
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
        if (this.props.takenSeats.length === 0) {
            alert('You need to choose at least one seat')
        } else if (this.props.takenSeats.length > 10) {
            alert('You can choose maximum 10 seats on one reservation')
        } else {
            this.setState({ showModal: true })
        }
    }
    
    render() {
        return (
            <div>
                {this.state.showModal && 
                    <Modal 
                        film={this.props.bookedTitle}
                        seats={this.props.takenSeats.length}
                        time={this.props.bookingTime}
                    />
                }
                <h1>Choose your seats for the movie</h1>
                <StyledScreen>screen</StyledScreen>
                <Room taken={this.state.taken}/>
                <ReservationFrom onFormSubmit={this.onFormSubmit} />
            </div>
        ) 
    }
};

function mapStateToProps(state){
    return {
        takenSeats: state.takenSeats.takenSeats,
        bookingTime: state.bookingTime,
        bookedTitle: state.bookedTitle
    }
};

export default connect(mapStateToProps)(SeanceRoom);
