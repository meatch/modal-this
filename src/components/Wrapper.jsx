import React from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Underlay from './Underlay.jsx';

const Wrapper = ({children}) => {

    return (
        <WrapperStyled className='Wrapper'>
            <Underlay>
                { children }
            </Underlay>
        </WrapperStyled>
    );
}

export default Wrapper;

const WrapperStyled = styled.div`
    
`;