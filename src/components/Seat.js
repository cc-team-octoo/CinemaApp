import React, { Component } from 'react';
import { StyledSeat, CheckboxContainer, HiddenCheckbox } from './Styled';

const takenSeats = [];

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleCheckboxChange.bind(this);
        // this.checkTaken.bind(this);
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
            console.log(`Seat number ${this.props.id}${this.props.rowName} was unchecked`);
        console.log(takenSeats)
    }   
    
    // checkTaken = () => {
    //     const seatId = `${this.props.id}${this.props.rowName}`;
    //     const taken = this.props.indexOf(seatId) > -1
    // }

    
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

export default Seat;