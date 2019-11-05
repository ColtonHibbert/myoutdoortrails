import React from 'react';

export const SEARCHFIELDCOMPONENTSTYLES = {
    MOBILEMENUSEARCHFIELD: "w-100 flex flex-row justify-center pv2 ph3 bb b--white-40",
    PRIMARYBUTTON: "pa1 ma0 br1 bg-green white b--none",
    HEROSEARCHFIELD: "w-100 flex flex-row justify-center pv2 ph3",
}
export const SearchFieldComponent = ({apiFunctions, submitSearchFieldAction, sendSearchFieldAction, buttonstyle, searchfieldstyle }) => {
    
    function onClickHandler(sendSearchFieldAction, apiFunctions) {
    sendSearchFieldAction();
    apiFunctions();
    }
          
    return (
        <div className={searchfieldstyle}>
             <input 
                className="h2 w-70 w-60-ns w-50-l bg-white b--none"
                type="text"
                spellCheck="false"
                onChange={submitSearchFieldAction}
                onKeyPress={(event) => {
                    if(event.key === "Enter") {
                        sendSearchFieldAction();
                        apiFunctions();
                    }
                }}
            >
            </input>
             <button
                className={buttonstyle}
                onClick={() => onClickHandler(sendSearchFieldAction, apiFunctions)}
            >Search</button>
        </div>
    )
}

export default SearchFieldComponent;