
import 'redux';
import { store } from '../index.js';
import {
    SHOW_TEXT,
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_SIGN_IN_MODAL,
    SUBMIT_SEARCH_FIELD,
} from './constants.js';

export const showText = () => {
    return {
        type: SHOW_TEXT,
        textPayload: "Cool Redux works!"
    }
}

export const displaySignUpModalAction = () => {
    return {
        type: DISPLAY_SIGN_UP_MODAL,
        displaySignUpModalPayload: !store.getState().displaySignUpModal,
    }
}


export const displaySignInModalAction = () => {
    return {
        type: DISPLAY_SIGN_IN_MODAL,
        displaySignInModalPayload: !store.getState().displaySignInModal,
    }
}

export const submitSearchFieldAction = (event) => {
    return {
        type: SUBMIT_SEARCH_FIELD,
        submitSearchFieldActionPayload: event.target.value
    }
}

