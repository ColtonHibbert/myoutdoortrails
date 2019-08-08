import React from 'react';

export const SEARCHFIELDCOMPONENTSTYLES = {
    MOBILEMENUSEARCHFIELD: "w-100 flex flex-row justify-center pv2 ph3 bb b--white-40",
    PRIMARYBUTTON: "pa1 ma0 br1 bg-green white b--none",
    HEROSEARCHFIELD: "w-100 flex flex-row justify-center pv2 ph3",
}
//buttontype
//searchfieldtype
export const SearchFieldComponent = ({submitSearchFieldAction, sendSearchFieldAction, buttonstyle, searchfieldstyle }) => {
    return (
        <div className={searchfieldstyle}>
             <input 
                className="h2 w-70 w-60-ns w-50-l bg-white b--none"
                type="text"
                onChange={submitSearchFieldAction}
            >
            </input>
             <button
                className={buttonstyle}
                onClick={sendSearchFieldAction}
            >Search</button>
        </div>
    )
}

export default SearchFieldComponent;