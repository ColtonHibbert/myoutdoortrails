import React from 'react';

export const CenterSection = (props) => {
    return (
        <div className="flex flex-row">
            <div className="flex">
                {props.children[0]}
            </div>
            <div className="flex flex-column">
                {props.children[1]}
                {props.children[2]}
            </div>
        </div>
    )
}

export default CenterSection;