import React, { useState } from 'react';
import styled from 'styled-components';

/* Components ---------------------------*/
import Modal from './Modal/Modal.jsx';

const App = () => {

    const [showModal, showModalUpdate] = useState(false);

    const handleToggle = () => {
        showModalUpdate(!showModal);
    }

    const modalConfig = {
        showModal: showModal,
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