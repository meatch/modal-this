import React, { useReducer, useEffect } from 'react';
import classnames from 'classnames';
import PropTypes from "prop-types";

/* Context ---------------------------*/
import Context from './context/index.js';
import reducers from './context/reducers.js'; 
import { 
    modalIsOpenUpdate, 
    maxHeightBodyUpdate, 
    isFullUpdate,
    mediaQueryUpdate, 
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
        // Components
        Header: config.Header,
        Footer: config.Footer,

        // Open and Close
        isOpen: config.isOpen,
        hasOpened: false,
        onClose: config.onClose,
        returnFocusId: config.returnFocusId,

        // Dims
        heightHeader: config.heightHeader ? config.heightHeader : 'auto',
        heightFooter: config.heightFooter ? config.heightFooter : 'auto',
        maxHeightBody: config.maxHeightBody,
        isFull: config.isFull,
        zIndex: config.zIndex ? config.zIndex : 1000,
        contentPadding: config.contentPadding ? config.contentPadding : 10,
        
        // Media Queries
        isSmall: config.isSmall ? config.isSmall : true,
        isMedium: config.isMedium ? config.isMedium : false,
        isLarge: config.isLarge ? config.isLarge : false,
        windWidth: config.windWidth ? config.windWidth : false,
    };

    const [ state, dispatch ] = useReducer(reducers, defaultState);


    /*---------------------------
    | Keep internal state aligned with Host state
    ---------------------------*/
    useEffect(()=>{
        dispatch(mediaQueryUpdate(config.isSmall, config.isMedium, config.isLarge, config.windWidth));
    }, [config.isSmall, config.isMedium, config.isLarge, config.windWidth]);
    
    useEffect(()=>{
        dispatch(modalIsOpenUpdate(config.isOpen));
    }, [config.isOpen]);

    useEffect(()=>{
        dispatch(isFullUpdate(config.isFull));
    }, [config.isFull]);

    useEffect(()=>{
        dispatch(returnFocusIdUpdate(config.returnFocusId));
    }, [config.returnFocusId]);

    /* Returning Focus :: Note, <ModalLightBox /> handles Focus on Open ---------------------------*/
    useEffect(()=>{
        if (state.hasOpened && !state.isOpen) {
            if (state.returnFocusId) {
                setTimeout(()=>{
                    // See focus to the returnFocusId provided by Host
                    const returnFocusElement = document.getElementById(state.returnFocusId);

                    if (returnFocusElement) {
                        returnFocusElement.focus();
                    } else {
                        console.warn(`<Modal />: Could not find the external DOM element (e.g. button) that triggered this modal open. Perhaps you failed to assign the returnFocusId (#${state.returnFocusId}) to the external element (e.g. button) you would like to return focus. ARIA: It is required for Modals to return focus back to the dom element that triggered it's opening.`);
                    }

                }, 100); //Why? Seems to be the only way to get it to play nice with focus.
            }
        }
    }, [state.hasOpened, state.isOpen, state.returnFocusId]);

    /* Body Scroll Bars - Hide ---------------------------*/
    useEffect(()=>{
        const domBody = document.querySelector('body');
        if (state.isOpen) {
            domBody.classList.add('no-scroll');
        } else {
            domBody.classList.remove('no-scroll');
        }

        // Dismount Method
        return () => {
            const domBody = document.querySelector('body');
            domBody.classList.remove('no-scroll');
        };
    }, [state.isOpen]);

    /* heightHeader, heightFooter ---------------------------*/
    useEffect(()=>{
        if (state.heightHeader !== 'auto'|| state.heightFooter !== 'auto') {
            let maxHeightBody = 690;
            if (state.heightHeader !== 'auto') {
                maxHeightBody = maxHeightBody - state.heightHeader;
            }
            if (state.heightFooter !== 'auto') {
                maxHeightBody = maxHeightBody - state.heightFooter;
            }
            dispatch(maxHeightBodyUpdate(maxHeightBody));
        }
    }, [state.heightHeader, state.heightFooter]);


    /*---------------------------
    | Render
    ---------------------------*/
    /* Classname ---------------------------*/
    const theClassName = classnames({
        'Modal': true,
        [config.className]: config.className,
        'isOpen': state.isOpen,
        'isFull': state.isFull,
        'isSmall': state.isSmall,
        'isMedium': state.isMedium,
        'isLarge': state.isLarge,
    });


    /* return ---------------------------*/
    return (
        <Context.Provider value={ {state, dispatch} }>
            <DomElement id={ config.id } className={ theClassName }>
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