import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'
import { ModalBckg, StyledModal, StyledButton, StyledInfo, StyledTitle } from './Styled';

const handleClick = (props) => {
    return `{props.seats}`
}

const Modal = props => {
    return ReactDOM.createPortal(
        <ModalBckg>
            <StyledModal>
                <h2>The confirmation email was sent</h2>
                <StyledInfo>You reserved {props.seats} seats for a movie:</StyledInfo>
                <StyledTitle>"{props.film}"</StyledTitle>
                <StyledInfo>The seance will take place at {props.time}</StyledInfo>
                <Link to='/'>
                    <StyledButton onClick={handleClick}>OK</StyledButton>
                </Link>
            </StyledModal>
        </ModalBckg>, 
        document.querySelector('#modal')
    )
}

export default Modal;