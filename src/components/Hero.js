import React from 'react';

export const Hero = (props) => {
    return (
        <div className="hero pa0 ma0 flex justify-center items-center tc">
            {props.children}
        </div>
    )
}

