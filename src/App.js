import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Modal, { Header, Body, Footer } from './Modal/Modal.jsx';

const App = () => {

    const [isOpen, isOpenUpdate] = useState(false);

    const handleOnOpen = () => {
        isOpenUpdate(true);
    }
    const handleOnClose = () => {
        isOpenUpdate(false);
    }

    const modalConfig = {
        isOpen: isOpen,
        id: 'MySingularModal',
        returnFocusId: 'returnToMe',
        onClose: handleOnClose,
    }

    return (
        <AppStyled className='App'>
            <button id='returnToMe' onClick={ handleOnOpen }>Open Modal</button>
            <div>Outside modal</div>
            <Modal config={ modalConfig }>
                <Header>I am the Header</Header>
                <Body>I am in the MODAL</Body>
                <Footer>I am the Footer</Footer>
            </Modal>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    
`;