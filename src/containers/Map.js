import React, {Component} from 'react';
import { store } from '../index.js';
import mapboxgl from 'mapbox-gl';
import { MAPBOXKEY } from '../config/config.js';
mapboxgl.accessToken = MAPBOXKEY;


export default class Map extends React.Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.map = new mapboxgl.Map({
        container: this.mapContainer,
        center: [store.getState().forwardGeocodingResponse.features[0].center[1], store.getState().forwardGeocodingResponse.features[0].center[0]],
        zoom: 13,
        style: "mapbox://styles/mapbox/outdoors-v10",
        hash: true,
        transformRequest: (url, resourceType)=> {
        if(resourceType === 'Source' && url.startsWith('http://myHost')) {
            return {
            url: url.replace('http', 'https'),
            headers: { 'my-custom-header': true},
            credentials: 'include'  // Include cookies for cross-origin requests
            }
            }
            }
        });
    }
    render() {
        return (
            <div className="flex w-100">
                <div className="flex w-100 vh-75 bg-white"
                    ref={el => this.mapContainer = el}
                >
                </div>
            </div>
        )
    }
}



