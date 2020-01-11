import React, { Component } from 'react';
// import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
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
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onFormSubmit(formValues) {
        const {username, email} = formValues;
        if (this.props.takenSeats.length === 0) {
            alert('You need to choose at least one seat')
        } else if (this.props.takenSeats.length > 10) {
            alert('You can choose maximum 10 seats on one reservation')
        } else {
            console.log('submit');

            const message = `You made a reservation for the movie`

            axios({
                method: "POST", 
                url:"http://localhost:8000/send", 
                data: {
                    username: username,   
                    email: email,  
                    messsage: message
                }
            }).then((response)=>{
                if (response.data.msg === 'success'){
                    alert("Message Sent."); 
                } else if(response.data.msg === 'fail'){
                    alert("Message failed to send.")
                }
            });

            this.setState({ showModal: true })
        }


    };
    
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
