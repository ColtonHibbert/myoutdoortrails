import React from 'react';

export const FeaturedHikes = ({featuredHikesArray }) => {
    return (
        <div id="featuredhikes" className="w-100 flex flex-column justify-center items-center pt4">
            <div className="tc f4 bg-green white">Check out our featured hikes</div>
            <div className="w-80 flex flex-row ma0 pa0 overflow-x-scroll br3
            flex-row-ns
            flex-row-m w-50-m
            flex-row-l w-25-l
            ">
            {
                featuredHikesArray.map((trailItem) => {
                    const difficulty = ((trailItem) => {
                        let text = "";
                        switch(trailItem.difficulty) {
                            case "green": text = "Easy";
                            break;
                            case "greenBlue": text = "Easy/Intermediate";
                            break;
                            case "blue": text = "Intermediate";
                            break;
                            case "blueBlack": text = "Intermediate/Difficult";
                            break;
                            case "black": text = "Difficult";
                            break;
                            default: text = "Very Difficult";
                        }
                        return text;
                    })(trailItem)
                    return (
                        <div 
                            className="min-width-100 h-100 ma0 pa0 ba bg-white
                            w2-l"
                            key={trailItem.name}
                        >
                            <img className="pa0 vh-25 w-100" src={trailItem.imgSmallMed} alt="trail"></img>
                            <div className="h4 flex flex-column justify-between">
                                <div className="flex">{trailItem.name}</div>
                                <div className="f5">{difficulty}</div>
                                <div className="flex flex-row">
                                    <div className="pr2 f6">Length:{trailItem.length} miles</div>
                                    <div className="f6">Ascent:{trailItem.ascent} feet</div>
                                </div>
                                <div className="f6">Rating:{trailItem.stars}</div>
                                <div className="f6">Location:{trailItem.location}</div>
                            </div>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
