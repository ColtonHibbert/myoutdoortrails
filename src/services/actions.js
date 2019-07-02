
import 'redux';
import {
    SHOW_TEXT,
} from './constants.js';

export const showText = () => {
    return {
        type: SHOW_TEXT,
        textPayload: "Cool Redux works!"
    }
}