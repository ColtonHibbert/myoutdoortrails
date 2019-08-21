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
        this.setTrailPointsToMap();
    }
    
    setTrailPointsToMap = () => {
        console.log("should set points")
        this.map.on('load', function () {
            this.map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                "type": "geojson",
                "data": {
                "type": "FeatureCollection",
                "features": [{
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [-77.03238901390978, 38.913188059745586]
                },
                "properties": {
                "title": "Mapbox DC",
                "icon": "monument"
                }
                }, {
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [-122.414, 37.776]
                },
                "properties": {
                "title": "Mapbox SF",
                "icon": "harbor"
                }
                }]
                }
                },
                "layout": {
                "icon-image": "{icon}-15",
                "text-field": "{title}",
                "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
                "text-offset": [0, 0.6],
                "text-anchor": "top"
                }
            });
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

export default connect(mapStateToProps, mapDispatchToProps)(Map);

