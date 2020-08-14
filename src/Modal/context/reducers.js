import { actionTypes } from './actions.js';

const defaultState = {};

const reducer = (state=defaultState, action) => {
    switch(action.type) {
        
        /* General ---------------------------*/
        case actionTypes.MODAL_OPEN_UPDATE: {
            let newState = {
                isOpen: action.isOpen,
            };

            // only want to change hasOpened if isOpen is set to true
            // All to avoid focusing on open button when 
            // component first loads.
            if (action.isOpen) {
                newState = {
                    isOpen: action.isOpen,
                    hasOpened: true,
                }
            }

            return {
                ...state,
                ...newState,
            }
        }
        
        /* Media Breakpoints ---------------------------*/
        case actionTypes.MEDIA_QUERY_UPDATE: {
            return {
                ...state,
                isSmall: action.isSmall,
                isMedium: action.isMedium,
                isLarge: action.isLarge,
                winWidth: action.winWidth,
            }
        }
        
        /* Dims ---------------------------*/
        case actionTypes.HEIGHT_HEADER_UPDATE: {
            return {
                ...state,
                heightHeader: action.heightHeader,
            }
        }
        case actionTypes.HEIGHT_FOOTER_UPDATE: {
            return {
                ...state,
                heightFooter: action.heightFooter,
            }
        }
        case actionTypes.MAX_HEIGHT_BODY_UPDATE: {
            return {
                ...state,
                maxHeightBody: action.maxHeightBody,
            }
        }
        case actionTypes.IS_FULL_UPDATE: {
            return {
                ...state,
                isFull: action.isFull,
            }
        }

        /* Focusable ---------------------------*/
        case actionTypes.RETURN_FOCUS_ID_UPDATE: {
            return {
                ...state,
                returnFocusId: action.returnFocusId,
            }
        }
        case actionTypes.FOCUS_ELEMENT_ON_CLOSE: {
            return {
                ...state,
                returnFocusElement: action.returnFocusElement,
            }
        }
        
        /* TabSlider ---------------------------*/
        case actionTypes.TAB_DRAWER_IS_OPEN_UPDATE: {
            return {
                ...state,
                modalTabDrawerIsOpen: action.modalTabDrawerIsOpen,
            }
        }
        case actionTypes.DRAWER_TRANSITIONEND_UPDATE: {
            return {
                ...state,
                drawerIsFullyOpen: action.drawerIsFullyOpen,
                drawerIsFullyClosed: action.drawerIsFullyClosed,
            }
        }
        case actionTypes.TAB_SLIDER_WIDTH_UPDATE: {
            return {
                ...state,
                tabSliderWidth: action.tabSliderWidth,
            }
        }
        case actionTypes.TAB_BUTTON_RETURN_ID_UPDATE: {
            return {
                ...state,
                tabButtonReturnId: action.tabButtonReturnId,
            }
        }
        case actionTypes.HAS_TAB_BUTTONS_UPDATE: {
            return {
                ...state,
                hasTabButtons: action.hasTabButtons,
            }
        }

        /* Default State Return ---------------------------*/
        default:
            return state;
    }
}

export default reducer;