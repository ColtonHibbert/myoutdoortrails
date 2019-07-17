
import {
    SHOW_TEXT,
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_SIGN_IN_MODAL,
    SUBMIT_SEARCH_FIELD,
} from './constants.js';


const initialState = {
    text: 'hello',
    displaySignUpModal: false,
    displaySignInModal: false,
    searchField: '',
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
    if(action.type === DISPLAY_SIGN_IN_MODAL) {
        return {...state, displaySignInModal: action.displaySignInModalPayload }
    }
    if(action.type === SUBMIT_SEARCH_FIELD) {
        return {...state, searchField: action.submitSearchFieldActionPayload }
    }
    return state;
}


