import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import DomElement from './DomElement.jsx';

const Modal = ({children, config}) => {
    return (
        <DomElement>
            <ModalStyled showModal={ config.showModal }>
                {children}
            </ModalStyled>
        </DomElement>
    );
}

export default Modal;

const ModalStyled = styled.div`
    display: ${ ({showModal}) => {  return showModal ? 'block':'none' } };
`;