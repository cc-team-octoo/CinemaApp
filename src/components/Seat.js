import React, { Component } from 'react';
import { StyledSeat, CheckboxContainer, HiddenCheckbox } from './StyledSeat';

class Seat extends Component {
    state = { checked: false }

    handleCheckboxChange = event =>
        this.setState({ checked: event.target.checked })
    
    render(props) {
        return (
            <CheckboxContainer
                checked={this.state.checked}
                onChange={this.handleCheckboxChange}>
                    <HiddenCheckbox checked={this.state.checked} />
                    <StyledSeat checked={this.state.checked}>{this.props.id}</StyledSeat>
            </CheckboxContainer>
        ) 
    }
}

export default Seat;