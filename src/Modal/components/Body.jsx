import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import classnames from 'classnames';

/* Context ---------------------------*/
import Context from '../context/index.js';

/* Components ---------------------------*/
import BodyContent from './BodyContent.jsx';

const Body = ({children}) => {

    const { state } = useContext(Context);

    const theClassName = classnames({
        'Body': true,
        'clearfix': true,
    });
    
    return (
        <BodyStyled
            state={ state }
            className={ theClassName }
        >
            <BodyContent>
                { children }
            </BodyContent>
        </BodyStyled>
    );
}

export default Body

const BodyStyled = styled.div`
    position: relative;
    overflow: hidden;
    padding: ${({state}) => `${state.contentPadding}px`};

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