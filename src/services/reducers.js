
import {
    SHOW_TEXT,
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_LOG_IN_MODAL,
    SUBMIT_SEARCH_FIELD,
    SUBMIT_EMAIL,
    SUBMIT_CRYPTED_PASSWORD,
    SUBMIT_NAME,
} from './constants.js';


const initialState = {
    text: 'hello',
    displaySignUpModal: false,
    displayLogInModal: false,
    searchField: '',
    email: '',
    cryptedPassword: '',
    name: '',
}
// if(action.type === ) {
//     return {...state, : action.}
// } 

export const reducer = (state=initialState, action={}) => {
    if(action.type === SHOW_TEXT) {
        return {...state, text: action.textPayload}
    } 
    if(action.type === DISPLAY_SIGN_UP_MODAL) {
        return {...state, displaySignUpModal: action.displaySignUpModalPayload }
    }
    if(action.type === DISPLAY_LOG_IN_MODAL) {
        return {...state, displayLogInModal: action.displayLogInModalPayload }
    }
    if(action.type === SUBMIT_SEARCH_FIELD) {
        return {...state, searchField: action.submitSearchFieldPayload }
    }
    if(action.type === SUBMIT_EMAIL) {
        return {...state, email: action.submitEmailPayload}
    }
    if(action.type === SUBMIT_CRYPTED_PASSWORD) {
        return {...state, cryptedPassword: action.submitCryptedPasswordPayload }
    }
    if(action.type === SUBMIT_NAME) {
    return {...state, name: action.submitNamePayload }
    }
    return state;
}


