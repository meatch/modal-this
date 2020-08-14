/*---------------------------
| Action Types
---------------------------*/
export const actionTypes = {
    /* General ---------------------------*/
    MODAL_IS_OPEN_UPDATE: 'MODAL_IS_OPEN_UPDATE',

    /* Media Breakpoints ---------------------------*/
    MEDIA_QUERY_UPDATE: 'MEDIA_QUERY_UPDATE',

    /* Dims ---------------------------*/
    HEIGHT_HEADER_UPDATE: 'HEIGHT_HEADER_UPDATE',
    HEIGHT_FOOTER_UPDATE: 'HEIGHT_FOOTER_UPDATE',
    MAX_HEIGHT_BODY_UPDATE: 'MAX_HEIGHT_BODY_UPDATE',
    IS_FULL_UPDATE: 'IS_FULL_UPDATE',
    
    /* Focusable ---------------------------*/
    RETURN_FOCUS_ID_UPDATE: 'RETURN_FOCUS_ID_UPDATE',
    FOCUS_ELEMENT_ON_CLOSE: 'FOCUS_ELEMENT_ON_CLOSE',

    /* TabSlider ---------------------------*/
    TAB_DRAWER_IS_OPEN_UPDATE: 'TAB_DRAWER_IS_OPEN_UPDATE',

    DRAWER_TRANSITIONEND_UPDATE: 'DRAWER_TRANSITIONEND_UPDATE',
    
    TAB_SLIDER_WIDTH_UPDATE: 'TAB_SLIDER_WIDTH_UPDATE',
    TAB_BUTTON_RETURN_ID_UPDATE: 'TAB_BUTTON_RETURN_ID_UPDATE',
    HAS_TAB_BUTTONS_UPDATE: 'HAS_TAB_BUTTONS_UPDATE',
}

/*===================================
|| 
|| Action Creators
|| 
===================================*/
/*---------------------------
| General
---------------------------*/
/* MODAL_IS_OPEN_UPDATE ---------------------------*/
export const modalIsOpenUpdate = (isOpen) => {
    return {
        type: actionTypes.MODAL_OPEN_UPDATE,
        isOpen: isOpen,
    }
}

/*---------------------------
| Media Breakpoints
---------------------------*/
/* MEDIA_QUERY_UPDATE ---------------------------*/
export const mediaQueryUpdate = (isSmall, isMedium, isLarge, windWidth) => {
    return {
        type: actionTypes.MEDIA_QUERY_UPDATE,
        isSmall: isSmall,
        isMedium: isMedium,
        isLarge: isLarge,
        windWidth: windWidth,
    }
}

/*---------------------------
| Dimensions
---------------------------*/
/* HEIGHT_HEADER_UPDATE ---------------------------*/
export const heightHeaderUpdate = (height) => {
    return {
        type: actionTypes.HEIGHT_HEADER_UPDATE,
        heightHeader: height,
    }
}

/* HEIGHT_FOOTER_UPDATE ---------------------------*/
export const heightFooterUpdate = (height) => {
    return {
        type: actionTypes.HEIGHT_FOOTER_UPDATE,
        heightFooter: height,
    }
}

/* MAX_HEIGHT_BODY_UPDATE ---------------------------*/
export const maxHeightBodyUpdate = (maxHeightBody) => {
    return {
        type: actionTypes.MAX_HEIGHT_BODY_UPDATE,
        maxHeightBody: maxHeightBody,
    }
}

/* IS_FULL_UPDATE ---------------------------*/
export const isFullUpdate = (isFull) => {
    return {
        type: actionTypes.IS_FULL_UPDATE,
        isFull: isFull,
    }
}

/* IS_FULL_UPDATE ---------------------------*/
export const returnFocusIdUpdate = (returnFocusId) => {
    return {
        type: actionTypes.RETURN_FOCUS_ID_UPDATE,
        returnFocusId: returnFocusId,
    }
}

/*---------------------------
| Focusable
---------------------------*/
/* FOCUS_ELEMENT_ON_CLOSE ---------------------------*/
export const focusElementOnCloseUpdate = (returnFocusElement) => {
    return {
        type: actionTypes.FOCUS_ELEMENT_ON_CLOSE,
        returnFocusElement: returnFocusElement,
    }
}

/*---------------------------
| Tab Slider
---------------------------*/
/* TAB_DRAWER_IS_OPEN_UPDATE ---------------------------*/
export const modalTabDrawerIsOpenUpdate = (modalTabDrawerIsOpen) => {
    return {
        type: actionTypes.TAB_DRAWER_IS_OPEN_UPDATE,
        modalTabDrawerIsOpen: modalTabDrawerIsOpen,
    }
}

/* DRAWER_TRANSITIONEND_UPDATE ---------------------------*/
export const drawerTransitionendUpdate = (drawerIsFullyOpen, drawerIsFullyClosed) => {
    return {
        type: actionTypes.DRAWER_TRANSITIONEND_UPDATE,
        drawerIsFullyOpen: drawerIsFullyOpen,
        drawerIsFullyClosed: drawerIsFullyClosed,
    }
}

/* TAB_SLIDER_WIDTH_UPDATE ---------------------------*/
export const tabSliderWidthUpdate = (tabSliderWidth) => {
    return {
        type: actionTypes.TAB_SLIDER_WIDTH_UPDATE,
        tabSliderWidth: tabSliderWidth,
    }
}

/* TAB_BUTTON_RETURN_ID_UPDATE ---------------------------*/
export const tabButtonReturnIdUpdate = (tabButtonReturnId) => {
    return {
        type: actionTypes.TAB_BUTTON_RETURN_ID_UPDATE,
        tabButtonReturnId: tabButtonReturnId,
    }
}

/* HAS_TAB_BUTTONS_UPDATE ---------------------------*/
export const hasTabButtonsUpdate = (hasTabButtons) => {
    return {
        type: actionTypes.HAS_TAB_BUTTONS_UPDATE,
        hasTabButtons: hasTabButtons,
    }
}
