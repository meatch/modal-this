import React, { useContext, useEffect, createRef } from 'react';
import styled, { css } from 'styled-components';
import keycode from 'keycode';
import classnames from 'classnames';

/* Context ---------------------------*/
import Context from '../context/index.js';

/* Components ---------------------------*/
import CloseButton from './CloseButton.jsx';

const Lightbox = ({children}) => {
    /*---------------------------
    | State, Props and Refs
    ---------------------------*/
    const { state } = useContext(Context);
    const refLightbox = createRef();
    const focusableSelectors = 'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])';

    /*---------------------------
    | Lifecycle
    ---------------------------*/
    useEffect(()=> {
        // Focus first focusable element in Lightbox
        if (state.isOpen) {
            const focusableEls = refLightbox.current.querySelectorAll(focusableSelectors);
            focusableEls[0].focus();
        }
    }, [state.isOpen, refLightbox]);

    /*---------------------------
    | Methods
    ---------------------------*/
    const trapFocus = (e) => {
        const focusableEls = refLightbox.current.querySelectorAll(focusableSelectors);

        const firstFocusableEl = focusableEls[0];  
        const lastFocusableEl = focusableEls[focusableEls.length - 1];

        if ( e.shiftKey ) /* shift + tab */ {
            if (document.activeElement === firstFocusableEl) {
                lastFocusableEl.focus();
                e.preventDefault();
            }
        } else /* tab */ {
            if (document.activeElement === lastFocusableEl) {
                firstFocusableEl.focus();
                e.preventDefault();
            }
        }
    }

    const handleKeyDown = (e) => {
        switch(keycode(e)) {
            case 'esc': {
                state.onClose();
                break;
            }
            case 'tab': {
                trapFocus(e);
                break;
            }
            default:
                return true;
        }
    }

    /*---------------------------
    | Render
    ---------------------------*/
    const theClassName = classnames({
        'Lightbox': true,
        'isSmall': state.isSmall,
    });

    return (
        <LightboxStyled
            state={ state }
            className={ theClassName }
            onClick={ (e) => { e.persist(); e.stopPropagation(); } }
            onKeyDown={ handleKeyDown }
            tabIndex={ 0 }
            ref={ refLightbox }
        >
            { children }
            {/* 
                Close button is positioned upper right, but last to focus
                helps with trapping focus too. Last goes to first
            */}
            <CloseButton />
        </LightboxStyled>
    );
}

export default Lightbox;

const LightboxStyled = styled.div`


    position: absolute;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    

    ${({state}) => state.isSmall && css`
        transform: translate(0,-50%);
        left: 5px; right: 5px;
    `}

    /*---------------------------
    | FULL and isSmall
    ---------------------------*/
    ${({state}) => state.isSmall && state.isFull && css`
        top: 5px; bottom: 5px;
        transform: none;
    `}

    /*---------------------------
    | isNotSmall
    ---------------------------*/
    ${({state}) => !state.isSmall && css`
        max-width: 688px;
        width: 100%;
    `}

    /*---------------------------
    | Close Button :: X
    ---------------------------*/
    & > .ButtonIcon {
        position: absolute;
        right: 0px; top: 0px;
        z-index: 10;
        width: 38px;
        height: 38px;
    }
`;