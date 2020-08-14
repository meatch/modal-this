import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Modal from './Modal/Modal.jsx';

const App = () => {

    const [isOpen, isOpenUpdate] = useState(false);

    const handleToggle = () => {
        isOpenUpdate(!isOpen);
    }

    const modalConfig = {
        isOpen: isOpen,
        id: 'MySingularModal',
    }


    return (
        <AppStyled className='Modal'>
            <button onClick={ handleToggle}>TOGGLE</button>
            Outside modal
            <Modal config={ modalConfig }>
                I am in the MODAL
            </Modal>
        </AppStyled>
    );
}

export default App;

const AppStyled = styled.div`
    
`;