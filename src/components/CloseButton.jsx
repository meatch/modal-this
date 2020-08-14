import React, { useContext } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faTimes,
} from '@fortawesome/free-solid-svg-icons';

/* Context ---------------------------*/
import Context from '../context/index.js';

const CloseButton = () => {
    const { state } = useContext(Context);

    return (
        <CloseButtonStyled onClick={ state.onClose } className='CloseButton'>
            <FontAwesomeIcon icon={ faTimes } />
        </CloseButtonStyled>
    );
}

export default CloseButton;

const CloseButtonStyled = styled.button`
    display: block;
    position: absolute;
    right: 0px; top: 0px;
    z-index: 10;
    width: 38px;
    height: 38px;

    cursor: pointer;

    /* make like a link */
    background-color: transparent;
    border: none;
    outline: none;
    padding: 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;

    svg {
        width: 12px;
    }

    opacity: .9;

    &:hover {
        opacity: 1;
    } 
    
    &:active { color: white; }
    
    &:focus {
        color: white;
        border: solid 1px #666;
    }
    &:disabled {
        cursor: not-allowed;
        pointer-events: all !important;
    }
`;