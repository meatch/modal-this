import React, { useContext, createRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

import Context from '../context/index.js';
import { tabSliderWidthUpdate } from '../context/actions.js';

const Body = ({children}) => {

    const { state, dispatch } = useContext(Context);
    const BodyRef = createRef();

    useEffect(()=>{
        if (state.isOpen) {
            const tabSliderWidth = BodyRef.current;
            setTimeout(()=> {
                dispatch(tabSliderWidthUpdate(tabSliderWidth.offsetWidth));
            }, 100);
        }
    }, [state.isOpen]);

    useEffect(()=>{
        const tabSliderWidth = BodyRef.current.offsetWidth;
        dispatch(tabSliderWidthUpdate(tabSliderWidth));
    }, [state.winWidth]);

    const theClassName = classnames({
        'Body': true,
        'clearfix': true,
    });
    
    return (
        <BodyStyled
            state={ state }
            ref={ BodyRef } 
            className={ theClassName }
        >
            { state.isOpen && children }
        </BodyStyled>
    );
}

export default Body

const BodyStyled = styled.div`
    position: relative;
    overflow: hidden;
    padding: 10px;

    ${({state}) => !state.modalTabDrawerIsOpen && css`
        overflow-y: auto;
    `}

    ${({state}) => state.isSmall && css`
        position: absolute;
        left: 0px; right: 0px;
        top: ${({state}) => state.heightHeader === 'auto' ? '0px' : `${state.heightHeader}px`};
        bottom: ${({state}) => state.heightFooter === 'auto' ? '0px' : `${state.heightFooter}px`};
    `}

    /*---------------------------
    | isNotSmall
    ---------------------------*/
    ${({state}) => !state.isSmall && css`
        max-height: ${({state}) => state.maxHeightBody ? `${state.maxHeightBody}px`: '690px'};
    `}
`;