import React from 'react';

export const SEARCHFIELDCOMPONENTSTYLES = {
    MOBILEMENUSEARCHFIELD: "w-100 flex flex-row justify-center pv2 ph3 bb b--white-40",
    PRIMARYBUTTON: "pa1 ma0 br1 bg-green white b--none",
    HEROSEARCHFIELD: "w-100 flex flex-row justify-center pv2 ph3",
}
export const SearchFieldComponent = ({submitSearchFieldAction, sendSearchFieldAction, forwardGeocoding, getTrails, buttonstyle, searchfieldstyle }) => {
    
        function onClickHandler(sendSearchFieldAction, forwardGeocoding, getTrails) {
        console.log("runnin onclickhandler searchield component")
        sendSearchFieldAction();
        forwardGeocoding();
        getTrails();
    }
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
                onClick={() => onClickHandler(sendSearchFieldAction, forwardGeocoding, getTrails)}
            >Search</button>
            <div onClick={forwardGeocoding}>forwardGeocoding</div>
            <div onClick={getTrails}>getTrails</div>
        </div>
    )
}

export default SearchFieldComponent;