import React from 'react';

//{trailsArray[0].imgSmallMed}
export const HikesNearYouList = ({trailsArray}) => {
    console.log(trailsArray[0].imgsmallMed)
    console.log(trailsArray)
    return (
        <div className="w-100 vh-75">
            <div className="w-80 h5 flex flex-row ma0 pa0 overflow-x-scroll
            flex-row-ns
            flex-row-m 
            flex-column-l
            ">
            {
                trailsArray.map((trailItem, i) => {
                    return (
                        <div className="vw-80 h5 min-width-100 ma0 pa0 ba bg-white">
                            <img className="pa0" src={trailsArray[i].imgSmallMed}></img>
                            <div>info</div>
                            <div>more info</div>
                        </div>
                    )
                })
            }
                
            </div>
        </div>
    )
}

export default HikesNearYouList;