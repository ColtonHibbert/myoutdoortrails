import React from 'react';
import { tsPropertySignature } from '@babel/types';


export const HeroSearch = ({getTrails}) => {
    return (
        <div className="w-100 flex flex-column justify-center items-center">
            <h2>Hike your next great adventure</h2>
            <div className="ma2 ma3-l">Search for cities, places, and trails.</div>
            
            <button
                onClick={getTrails}
            >hikingprojectapi</button>
        </div>
    )
}

export default HeroSearch;