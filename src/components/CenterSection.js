import React from 'react';

export const CenterSection = (props) => {
    return (
        <div
        className="flex flex-column items-center justify-center ma1
        flex-column-ns
        flex-column-m
        flex-row-l ma3-l
        ">
            <div 
            className="w-100 order-1 flex flex-row pt3
            order-1-ns
            order-1-m flex-column-m
            w-25-l order-0-l flex-row-l
            "
            >
                {props.children[0]}
            </div>
            <div 
            className="w-90 order-0 flex flex-column 
            order-0-ns
            order-0-m 
            order-1-l
            "
            >
                {props.children[1]}
            </div>
        </div>
    )
}

export default CenterSection;