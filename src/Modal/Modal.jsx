import React, { useReducer, useEffect, useRef } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

/* Context ---------------------------*/
import Context from './context/index.js';
import reducers from './context/reducers.js';
import { 
    modalIsOpenUpdate, 
    maxHeightBodyUpdate, 
    isFullUpdate,
    focusElementOnCloseUpdate, 
    mediaQueryUpdate, 
    modalTabDrawerIsOpenUpdate,
    hasTabButtonsUpdate,
    returnFocusIdUpdate
} from './context/actions.js';

/* Components ---------------------------*/
import DomElement from './DomElement.jsx';
import Wrapper from './components/Wrapper.jsx';


/*---------------------------
| Component
---------------------------*/
const Modal = ({children, config}) => {

    /*---------------------------
    | Initialize Context State
    ---------------------------*/
    const defaultState = {
        // Open and Close
        isOpen: config.isOpen,
        hasOpened: false,
        onClose: config.onClose,
        returnFocusElement: config.returnFocusElement,

        // Dims
        heightHeader: config.heightHeader ? config.heightHeader : 'auto',
        heightFooter: config.heightFooter ? config.heightFooter : 'auto',
        maxHeightBody: config.maxHeightBody,
        isFull: config.isFull,
        zIndex: config.zIndex ? config.zIndex : 1000,
        contentPadding: config.contentPadding ? config.contentPadding : '10px',
        
        // Media Queries
        isSmall: config.isSmall ? config.isSmall : true,
        isMedium: config.isMedium ? config.isMedium : false,
        isLarge: config.isLarge ? config.isLarge : false,
    };

    const [ state, dispatch ] = useReducer(reducers, defaultState);


    /*---------------------------
    | Lifecycle
    ---------------------------*/
    


    return (
        <Context.Provider value={ {state, dispatch} }>
            <DomElement id={ config.id }>
                {
                    config.isOpen &&
                    <Wrapper>
                        {children}
                    </Wrapper>
                }
            </DomElement>
        </Context.Provider>
    );
}

export default Modal;


/*---------------------------
| PropTypes
---------------------------*/
Modal.propTypes = {
    config: PropTypes.object.isRequired,
}