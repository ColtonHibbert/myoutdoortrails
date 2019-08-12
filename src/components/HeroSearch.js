import React from 'react';
import { tsPropertySignature } from '@babel/types';
import { forwardGeocoding } from '../services/actions';


export const HeroSearch = ({getTrails, forwardGeocoding}, props) => {
    return (
        <div className="w-100 flex flex-column justify-center items-center">
            <h2>Hike your next great adventure</h2>
            <div className="ma2 ma3-l">Search for cities, places, and trails.</div>
            {props.children}
            <button
                onClick={getTrails}
            >hikingprojectapi</button>
            <button onClick={forwardGeocoding}>
            mapboxapi
            </button>
        </div>
    )
}

export default HeroSearch;