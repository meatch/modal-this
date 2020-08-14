import React, { useContext, createRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

/* Context ---------------------------*/
import Context from '../context/index.js';
import { heightHeaderUpdate } from '../context/actions.js';

const Header = ({
    children,
    className,
}) => {

    const { state, dispatch } = useContext(Context);
    const refHeader = createRef();

    let theFontSize = state.isSmall ? '14px':'18px';

    useEffect(()=>{
        if (state.isOpen) {
            const heightHeader = refHeader.current.offsetHeight;
            dispatch(heightHeaderUpdate(heightHeader));
        }
    },[state.isOpen]);

    const theClassName = classnames({
        'Header': true,
        [className]: className,
    });

    return (
        <HeaderStyled
            state={ state }
            ref={ refHeader }
            className={ theClassName }
            theFontSize={ theFontSize }
        >
            {children}
        </HeaderStyled>
    );
}

export default Header;

const HeaderStyled = styled.div`
    background-color: maroon;
    color: #fff;
    padding: 10px;
    font-size: ${ props => props.theFontSize};
    line-height: 100%;

    /*---------------------------
    | FULL and isSmall
    ---------------------------*/
    ${({state}) => state.isSmall && state.isFull && css`
        position: absolute;
        left: 0px; right: 0px; top: 0px;
    `}
`;