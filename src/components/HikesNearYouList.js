import React from 'react';

//{trailsArray[0].imgSmallMed}
export const HikesNearYouList = ({trailsArray}) => {
    console.log(trailsArray[0].imgsmallMed)
    console.log(trailsArray)
    return (
        <div className="w-100">
            <ul className="w-100 flex flex-row ma0 pa0 list 
            flex-row-m 
            flex-column-l
            ">
            {
                trailsArray.map(trailItem = () => {
                    return (
                        <li className="w-80 h-auto ma0 pa0 ba bg-white">
                            <img src={trailsArray[0].imgSmallMed}></img>
                            <div>info</div>
                            <div>more info</div>
                        </li>
                    )
                })
            }
                
            </ul>
        </div>
    )
}

export default HikesNearYouList;