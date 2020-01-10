import React, { Component } from 'react';
import { StyledSeat, CheckboxContainer, HiddenCheckbox } from './Styled';

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleCheckboxChange.bind(this);
        // this.checkTaken.bind(this);
    }  

    handleCheckboxChange = async event => {
        await this.setState({ checked: event.target.checked });
        this.state.checked ? 
            console.log(`Seat number ${this.props.id}${this.props.rowName} is checked`) : 
            console.log(`Seat number ${this.props.id}${this.props.rowName} was unchecked`);
        console.log(this.props.taken)
    }   
    
    // checkTaken = () => {
    //     const seatId = `${this.props.id}${this.props.rowName}`;
    //     this.props.indexOf(seatId) > -1 ? true : false;
    // }

    
    render() {
        return (
            <CheckboxContainer
                checked={this.state.checked}>
                    <HiddenCheckbox 
                        checked={this.state.checked}
                        onChange={this.handleCheckboxChange}/>
                    <StyledSeat checked={this.state.checked}>{this.props.id}</StyledSeat>
            </CheckboxContainer>
        ) 
    }
}

export default Seat;