import React, { useContext, createRef, useEffect } from 'react';
import styled, { css } from 'styled-components';

/* Context ---------------------------*/
import Context from '../context/index.js';
import { heightFooterUpdate } from '../context/actions.js';

export const Footer = ({children}) => {

    const { state, dispatch } = useContext(Context);
    const refFooter = createRef();

    const {
        current: currFooter
    } = refFooter;

    useEffect(()=>{

        if (state.isOpen && currFooter) {
            console.log('too much');
            const heightFooter = currFooter.offsetHeight;
            dispatch(heightFooterUpdate(heightFooter));
        }
    },[state.isOpen, dispatch, currFooter]);

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

const FooterStyled = styled.div`
    padding: ${({state}) => `${state.contentPadding}px`};

    /*---------------------------
    | FULL and isSmall
    ---------------------------*/
    ${({state}) => state.isSmall && state.isFull && css`
        position: absolute;
        left: 0px; right: 0px; bottom: 0px;
    `}
`;