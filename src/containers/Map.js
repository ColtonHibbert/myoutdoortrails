import React, {Component} from 'react';
import { connect } from 'react-redux';
import { store } from '../index.js';
import mapboxgl from 'mapbox-gl';
import { MAPBOXKEY } from '../config/config.js';
mapboxgl.accessToken = MAPBOXKEY;

const mapStateToProps = (state) => {
    return {
        searchLatitude: state.searchLatitude,
        searchLongitude: state.searchLongitude
    }
}

const mapDispatchToProps = {

}
class Map extends Component {
    constructor() {
        super();
    }
    componentDidMount() {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            center: [this.props.searchLongitude, this.props.searchLatitude],
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
        console.log(this.map)
    }
    componentDidUpdate() {
        this.map.setCenter([this.props.searchLongitude, this.props.searchLatitude]);
        console.log(this.map)
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

export default connect(mapStateToProps, mapDispatchToProps)(Map);

