import React from 'react';

export const HeroSearch = ({submitSearchFieldAction, sendSearchFieldAction }) => {
    return (
        <div>
            <h2>Hike your next great adventure</h2>
            <div>Search for cities, places, and trails.</div>
            <div className="flex flex-row">
                <input 
                className="h2 w5 bg-white"
                type="text"
                onChange={submitSearchFieldAction}
                >
                </input>
                <button
                    onClick={sendSearchFieldAction}
                >Search</button>
            </div>
        </div>
    )
}

export default HeroSearch;