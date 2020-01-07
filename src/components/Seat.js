import React, { Component } from 'react';
import { StyledSeat, CheckboxContainer, HiddenCheckbox } from './StyledSeat';

class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = { checked: false };
        this.handleCheckboxChange.bind(this);
    }  

    handleCheckboxChange = async event => {
        await this.setState({ checked: event.target.checked });
        this.state.checked ? 
            console.log(`Seat number ${this.props.id} is checked`) : 
            console.log(`Seat number ${this.props.id} was unchecked`)
    }        
    
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