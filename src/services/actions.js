
import 'redux';
import { store } from '../index.js';
import {
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_LOG_IN_MODAL,
    SUBMIT_SEARCH_FIELD,
    SUBMIT_EMAIL,
    SUBMIT_CRYPTED_PASSWORD,
    SUBMIT_NAME,
    LOAD_USER,
    IS_LOGGED_IN,
    RESET_USER,
    IS_MOBILE,
    DISPLAY_MOBILE_MENU,
    UN_DISPLAY_MOBILE_MENU,
    FORWARD_GEOCODING_RESPONSE,
    GET_TRAILS_RESPONSE,
    RE_CENTER_MAP,
} from './constants.js';
const publicMapBoxToken = "pk.eyJ1IjoiY29kaW5nd2l0aGNvbHRvbiIsImEiOiJjano0OXg5MzYwYzQyM2dtbDdvajRlMGg3In0.tIhLprKwtyrZ0EM2tG2J4w"
//import { HPKEY, MAPBOXKEY } from '../config/config.js';



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
    console.log("should sub name")
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

export const isLoggedIn = () => {
    return {
        type: IS_LOGGED_IN,
        loggedInPayload: !store.getState().loggedIn
    }
}

export const loadUser = (user) => {
    return {
        type: LOAD_USER,
        idPayload: user.id,
        namePayload: user.name,
        emailPayload: user.email,
        joinedPayload: user.joined
    }
}

export const resetUser = () => {
    return {
        type: RESET_USER,
        idPayload: '',
        namePayload: '',
        emailPayload: '',
        joinedPayload: ''
    }
}

export const isMobileAction = (payload) => {
    return {
        type: IS_MOBILE,
        isMobilePayload: payload
    }
}

export const displayMobileMenuAction = () => {
    return {
        type: DISPLAY_MOBILE_MENU,
        displayMobileMenuPayload: !store.getState().displayMobileMenu
    }
}

export const unDisplayMobileMenuAction = (payload) => {
    return {
        type: UN_DISPLAY_MOBILE_MENU,
        unDisplayMobileMenuPayload: payload
    }
}



export const sendSearchFieldAction = () => {
    fetch('https://myoutdoortrailsnode.herokuapp.com/searchfield', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchField: store.getState().searchField
        })
    }).then(response => response.json())
    .then(data => console.log(data))
}

export const sendSignUpAction = () => {
    fetch('https://myoutdoortrailsnode.herokuapp.com/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            crypted_password: store.getState().cryptedPassword,
            email: store.getState().user.email,
            name: store.getState().user.name
        })
    })
    .then(user => user.json())
    .then(user => {
        if (user.email) {
                store.dispatch(loadUser(user))
                store.dispatch(isLoggedIn())
                store.dispatch(displaySignUpModalAction())
        }
    })
}

export const sendLogIn = () => {
    fetch('https://myoutdoortrailsnode.herokuapp.com/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            crypted_password: store.getState().cryptedPassword,
            email: store.getState().user.email,
        })
    })
    .then(user => user.json())
    .then(user => {
        if (user.email) {
                store.dispatch(loadUser(user))
                store.dispatch(isLoggedIn())
                store.dispatch(displayLogInModalAction())
        }
    })
}

export const getTrails = () => {
    console.log("start of getTrails")
    const lat = `${store.getState().searchLatitude}`;
    const lon = `${store.getState().searchLongitude}`;
    console.log(lat,lon)
    fetch('https://myoutdoortrailsnode.herokuapp.com/hikingproject', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: "no-cors",
        body: JSON.stringify({
            lat: lat,
            lon: lon
        })
    })
    .then(res => res.json())
    .then(data => {
        store.dispatch(getTrailsResponse(data))
    })
    console.log("end of getTrails")
    return
    // fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`)
    // .then(res => res.json())
    // .then(data => {
    //     store.dispatch(getTrailsResponse(data))
    // })
    // console.log("end of getTrails")
    
}

export const getTrailsResponse = (data) => {
    return {
        type: GET_TRAILS_RESPONSE,
        getTrailsResponsePayload: data,
        trailsArrayPayload: data.trails
    }
}

export const forwardGeocoding = () => {
    console.log("start of forwardGeocoding")
    if (store.getState().searchField) {
        const getSearchFieldURLValue = () => {
            const newValue = store.getState().searchField.replace(" ", "%20")
            return newValue;
        }
        const searchFieldURLValue = getSearchFieldURLValue();
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchFieldURLValue}.json?access_token=${publicMapBoxToken}`)
        .then(res => res.json())
        .then( data => {
            store.dispatch(forwardGeocodingResponse(data))
            console.log("below is the forwardGeocoding data")
            console.log(data)
        })
    }
    console.log("end of forwardGeocoding")
    return;
}

export const apiFunctions = () => {
    (async () => {
        console.log("api function calls forwardGeocoding")
        console.log("start of forwardGeocoding")
    if (store.getState().searchField) {
        const getSearchFieldURLValue = () => {
            const newValue = store.getState().searchField.replace(" ", "%20")
            return newValue;
        }
        const searchFieldURLValue = getSearchFieldURLValue();
        await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${searchFieldURLValue}.json?access_token=${publicMapBoxToken}`)
        .then(res => res.json())
        .then( data => {
            store.dispatch(forwardGeocodingResponse(data))
            console.log("below is the forwardGeocoding data")
            console.log(data)
        })
    }
    console.log("end of forwardGeocoding")
    console.log("api function calls getTrails")
    console.log("start of getTrails")
    const lat = `${store.getState().searchLatitude}`;
    const lon = `${store.getState().searchLongitude}`;
    console.log(lat,lon)
    // await fetch(`https://www.hikingproject.com/data/get-trails?lat=${lat}&lon=${lon}&maxDistance=50&key=${process.env.HPKEY}`)
    // .then(res => res.json())
    await fetch('https://myoutdoortrailsnode.herokuapp.com/hikingproject', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        mode: "no-cors",
        body: JSON.stringify({
            lat: lat,
            lon: lon
        })
    })
    .then(res => res.json())
    .then(data => {
        store.dispatch(getTrailsResponse(data))
    })
    console.log("end of getTrails")
    })()
}

export const forwardGeocodingResponse = (data) => {
    return {
        type: FORWARD_GEOCODING_RESPONSE,
        forwardGeocodingResponsePayload: data
    }
}

export const reCenterMap = (data)  => {
    return {
        type: RE_CENTER_MAP,
        searchLatitudePayload: data.latitude,
        searchLongitudePayload: data.longitude,
    }
}



