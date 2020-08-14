import React from 'react';

/* Components ---------------------------*/
import DomElement from './DomElement.jsx';
import Wrapper from './components/Wrapper.jsx';

const Modal = ({children, config}) => {
    return (
        <DomElement id={ config.id }>
            {
                config.showModal &&
                <Wrapper>
                    {children}
                </Wrapper>
            }
        </DomElement>
    );
}

export default Modal;