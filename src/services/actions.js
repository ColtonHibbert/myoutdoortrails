
import 'redux';
import { store } from '../index.js';
import {
    SHOW_TEXT,
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_LOG_IN_MODAL,
    SUBMIT_SEARCH_FIELD,
    SUBMIT_EMAIL,
    SUBMIT_CRYPTED_PASSWORD,
    SUBMIT_NAME,
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


export const displayLogInModalAction = () => {
    return {
        type: DISPLAY_LOG_IN_MODAL,
        displayLogInModalPayload: !store.getState().displayLogInModal,
    }
}

export const submitSearchFieldAction = (event) => {
    return {
        type: SUBMIT_SEARCH_FIELD,
        submitSearchFieldPayload: event.target.value
    }
}

export const submitEmailAction = (event) => {
    return {
        type: SUBMIT_EMAIL,
        submitEmailPayload: event.target.value
    }
}

export const submitNameAction = (event) => {
    return {
        type: SUBMIT_NAME,
        submitNamePayload: event.target.value
    }
}


export const submitCryptedPasswordAction = (event) => {
    return {
        type: SUBMIT_CRYPTED_PASSWORD,
        submitCryptedPasswordPayload: event.target.value
    }
}

// http:localhost:3001/searchfield

export const sendSearchFieldAction = () => {
    fetch('https://desolate-bayou-16919.herokuapp.com/searchfield', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchField: store.getState().searchField
        })
    }).then(response => response.json())
    .then(data => console.log(data))
}

export const sendSignUpAction = () => {
    fetch('https://desolate-bayou-16919.herokuapp.com/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            crypted_password: store.getState().cryptedPassword,
            email: store.getState().email,
            name: store.getState().name
        })
    })
}

export const sendLogIn = () => {
    fetch('https://desolate-bayou-16919.herokuapp.com/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            crypted_password: store.getState().cryptedPassword,
            email: store.getState().email,
        })
    }).then(data => console.log(data.json()))
}
