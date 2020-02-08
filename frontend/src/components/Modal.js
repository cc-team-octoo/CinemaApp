import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { resetTakenSeats } from '../actions';
import { ModalBckg, StyledModal, StyledButton, StyledInfo, StyledTitle } from './Styled';

const mapDispatchToProps = { resetTakenSeats }

class Modal extends Component {

    handleClick = () => {
        this.props.resetTakenSeats();
    }

    render() {
        return ReactDOM.createPortal(
            <ModalBckg>
                <StyledModal>
                    <h2>The confirmation email was sent</h2>
                    <StyledInfo>You reserved {this.props.seats} seats for the movie:</StyledInfo>
                    <StyledTitle>"{this.props.film}"</StyledTitle>
                    <StyledInfo>The screening will take place at {this.props.time}</StyledInfo>
                    <Link to='/'>
                        <StyledButton onClick={this.handleClick}>OK</StyledButton>
                    </Link>
                </StyledModal>
            </ModalBckg>, 
            document.querySelector('#modal')
        )
    }
}

export default connect(null, mapDispatchToProps)(Modal);