import React, { useContext, createRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/index.js';
import { heightFooterUpdate } from '../context/actions.js';

const Footer = ({children}) => {

    const { state, dispatch } = useContext(Context);
    const refFooter = createRef();

    useEffect(()=>{
        if (state.isOpen) {
            const heightFooter = refFooter.current.offsetHeight;
            dispatch(heightFooterUpdate(heightFooter));
        }
    },[state.isOpen]);

    return (
        <FooterStyled
            state={ state }
            ref={ refFooter }
            className={ 'Footer' }
        >
            {children}
        </FooterStyled>
    );
}

export default Footer;

const FooterStyled = styled.div`
    padding: 20px 10px; 

    /*---------------------------
    | FULL and isSmall
    ---------------------------*/
    ${({state}) => state.isSmall && state.isFull && css`
        position: absolute;
        left: 0px; right: 0px; bottom: 0px;
    `}
`;