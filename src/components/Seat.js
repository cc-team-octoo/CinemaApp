import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setTakenSeats } from '../actions';
import { StyledSeat, CheckboxContainer, HiddenCheckbox } from './Styled';

const mapDispatchToProps = { setTakenSeats }

const takenSeats = [];

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleCheckboxChange.bind(this);
    }  

    handleCheckboxChange = async event => {
        await this.setState({ checked: event.target.checked });

        const seatId = `${this.props.id}${this.props.rowName}`; 
        if(this.state.checked) {
            takenSeats.push(seatId)
        } else {
            const i = takenSeats.indexOf(seatId);
            if(i !== -1) {takenSeats.splice(i, 1)};
        }
        this.props.setTakenSeats(takenSeats);
    }   
       
    render() {
        const seatId = `${this.props.id}${this.props.rowName}`;
        const taken = this.props.taken.indexOf(seatId) > -1;

        return (
            <CheckboxContainer
                checked={taken || this.state.checked}>
                    <HiddenCheckbox 
                        checked={taken || this.state.checked}
                        onChange={this.handleCheckboxChange}
                        disabled={taken}/>
                    <StyledSeat checked={taken || this.state.checked} disabled={taken}>
                        {this.props.id}
                    </StyledSeat>
            </CheckboxContainer>
        ) 
    }
}

export default connect(null, mapDispatchToProps)(Seat);
