import React from 'react';

export const HeroSearch = (props) => {
    return (
        <div className="w-100 flex flex-column justify-center items-center">
            <h2>Hike your next great adventure</h2>
            <div className="ma2 ma3-l">Search for cities, places, and trails.</div>
            {props.children}
        </div>
    )
}

export default HeroSearch;
