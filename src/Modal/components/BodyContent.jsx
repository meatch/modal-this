import React from 'react';
import styled from 'styled-components';

const BodyContent = ({ children }) => {
    return (
        <BodyContentStyled className={ 'BodyContent' }>
            { children }
        </BodyContentStyled>
    );
}

export default BodyContent;

const BodyContentStyled = styled.div`  
    overflow: hidden; 
    overflow-y: auto;
    min-height: 100px;
`;