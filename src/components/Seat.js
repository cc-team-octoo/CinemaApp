import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTakenSeat, removeTakenSeat } from '../actions';
import { StyledSeat, CheckboxContainer, HiddenCheckbox } from './Styled';

const mapDispatchToProps = { addTakenSeat, removeTakenSeat }

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
        this.state.checked ? this.props.addTakenSeat(seatId) : this.props.removeTakenSeat(seatId);
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
