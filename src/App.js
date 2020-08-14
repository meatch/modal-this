import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Modal from './Modal/Modal.jsx';

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
        Header: () => { return <header>I am Header</header> },
        Footer: () => { return <footer>I am Footer</footer> },
        onClose: handleOnClose,
    }

    return (
        <AppStyled className='App'>
            <button id='returnToMe' onClick={ handleOnOpen }>Open Modal</button>
            <div>Outside modal</div>
            <Modal config={ modalConfig }>
                I am in the MODAL
            </Modal>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    
`;