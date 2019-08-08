import React from 'react';

export const Hero = (props) => {
    return (
        <div className="hero flex justify-center items-center tc">
            {props.children}
        </div>
    )
}

export default Hero;