
import {
    SHOW_TEXT
} from './constants.js';


const initialState = {
    text: 'hello',
}

export const reducer = (state=initialState, action={}) => {
    if(action.type === SHOW_TEXT) {
        return {...state, text: action.textPayload}
    } 
    return state;
}


