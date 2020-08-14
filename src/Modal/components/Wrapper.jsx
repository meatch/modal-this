import React from 'react';
import styled from 'styled-components';

const Wrapper = ({children}) => {

    return (
        <WrapperStyled className='Wrapper'>
            { children } 
        </WrapperStyled>
    );
}

export default Wrapper;

const WrapperStyled = styled.div`
    
`;