import React from 'react';

export const CenterSection = (props) => {
    return (
        <div className="flex flex-row">
            <div className="flex w-20">
                {props.children[0]}
            </div>
            <div className="flex flex-column w-70">
                {props.children[1]}
            </div>
        </div>
    )
}

export default CenterSection;