import React, { useContext } from 'react';
import Context from '../context/index.js';
import styled from 'styled-components';

/* Components ---------------------------*/
import Lightbox from './Lightbox.jsx';

const Underlay = ({children}) => {

    const { state } = useContext(Context);

    return (
        <UnderlayStyled
            state={ state }
            className={ 'Underlay' }
            onClick={ state.onClose }
        >
            <Lightbox>
                { children } 
            </Lightbox>
        </UnderlayStyled>
    );
}

export default Underlay;

const UnderlayStyled = styled.div`
    position: fixed;
    left: 0; right: 0; top: 0; bottom: 0;
    z-index: ${ ({state}) => state.zIndex };
    background-color: rgba(82,82,82,.8);
`;