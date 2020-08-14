import React, { useContext } from 'react';
import Context from '../context/index.js';
import styled, { css } from 'styled-components';

const BodyContent = ({ children }) => {
    const { state } = useContext(Context);

    return (
        <BodyContentStyled
            state={ state }
            className={ 'BodyContent' }
            aria-hidden={ state.drawerIsFullyOpen }
        >
            { children }
        </BodyContentStyled>
    );
}

export default BodyContent;

const BodyContentStyled = styled.div`  
    overflow: hidden; 
    overflow-y: auto;
    
    min-height: 100px;

    /* 
        * Only applied to > children, not child descendants
        * Allows children to hit the walls
        * Removes the need to add negative margins to hit walls
        * Applies default 10px padding
        * Removes the need to implement padding on each child
        * Can be overridden if need be in implemntation
    */
    > * {
        padding: ${({state}) => `${state.BodyContentPadding}px`};
    }
`;