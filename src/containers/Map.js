import React, {Component} from 'react';
import { connect } from 'react-redux';
import { store } from '../index.js';
import mapboxgl from 'mapbox-gl';
import { MAPBOXKEY } from '../config/config.js';
mapboxgl.accessToken = MAPBOXKEY;

const mapStateToProps = (state) => {
    return {
        searchLatitude: state.searchLatitude,
        searchLongitude: state.searchLongitude,
        trailsArray: state.trailsArray
    }
}

const mapDispatchToProps = {

}
class Map extends Component {
    constructor() {
        super();
    }
   
    componentDidMount() {
    //  console.log("should start this.map")
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            center: [this.props.searchLongitude, this.props.searchLatitude],
            zoom: 9,
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
        console.log("should load map")
        console.log(this.map)
        this.map.on('load', () =>  {
            console.log('load just ran bro')
            if(this.props.trailsArray[0]) {
                this.fillFeaturesHikingListArr();
                console.log(this.featuresHikingListArr)
                const mapLayer = this.map.getLayer('points');
                if(mapLayer !== undefined ) {
                    this.map.removeLayer('points');
                    this.map.removeSource('points');
                }
                this.map.addLayer({
                    "id": "points",
                    "type": "symbol",
                    "source": {
                    "type": "geojson",
                    "data": {
                    "type": "FeatureCollection",
                    "features": this.featuresHikingListArr,
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
            }
            // const mapLayer = this.map.getLayer('points');
            // if(mapLayer !== undefined ) {
            //     console.log("remove load points")
            //     this.map.removeLayer('points');
            //     this.map.removeSource('points');
            // }
            //     console.log("should add layer bro")
            //     this.fillFeaturesHikingListArr()
            //     this.map.addLayer({
            //         "id": "points",
            //         "type": "symbol",
            //         "source": {
            //         "type": "geojson",
            //         "data": {
            //         "type": "FeatureCollection",
            //         "features": this.FeaturesHikingListArr,
            //         }
            //         },
            //         "layout": {
            //         "icon-image": "{icon}-15",
            //         "text-field": "{title}",
            //         "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
            //         "text-offset": [0, 0.6],
            //         "text-anchor": "top"
            //         }
            //     });  
        })
    }

    featuresHikingListArr = [];
    fillFeaturesHikingListArr() {
        this.featuresHikingListArr = [];
        for (let i = 0; i < this.props.trailsArray.length; i++) {
            const featuresHikingListItem = {
                "type": "Feature",
                "geometry": {
                "type": "Point",
                "coordinates": [this.props.trailsArray[i].longitude, this.props.trailsArray[i].latitude]
                },
                "properties": {
                "title": this.props.trailsArray[i].name,
                "icon": "marker"
                }
            }
            this.featuresHikingListArr.push(featuresHikingListItem)
        }
    }
    
       
    componentDidUpdate() {
        this.map.setCenter([this.props.searchLongitude, this.props.searchLatitude]);
        console.log("componentdidupdate on map")
        if(this.props.trailsArray[0]) {
            this.fillFeaturesHikingListArr();
            console.log(this.featuresHikingListArr)
            const mapLayer = this.map.getLayer('points');
            if(mapLayer !== undefined ) {
                this.map.removeLayer('points');
                this.map.removeSource('points');
            }
            this.map.addLayer({
                "id": "points",
                "type": "symbol",
                "source": {
                "type": "geojson",
                "data": {
                "type": "FeatureCollection",
                "features": this.featuresHikingListArr,
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
        }
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

