import React from 'react';
import ReactDOM from 'react-dom';
import { ModalBckg, StyledModal, StyledButton  } from './Styled';

const Modal = props => {
    return ReactDOM.createPortal(
        <ModalBckg>
            <StyledModal>
                <p></p>
                <StyledButton>OK</StyledButton>
            </StyledModal>
        </ModalBckg>, 
        document.querySelector('#modal')
    )
}

export default Modal;