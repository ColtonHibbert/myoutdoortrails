import React from 'react';
import { tsPropertySignature } from '@babel/types';


export const HeroSearch = (props) => {
    return (
        <div>
            <h2>Hike your next great adventure</h2>
            <div>Search for cities, places, and trails.</div>
            {props.children}
        </div>
    )
}

export default HeroSearch;