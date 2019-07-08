import React from 'react';

export const Hero = (props) => {
    return (
        <div className="hero flex justify-center items-center">
            {props.children}
        </div>
    )
}

export default Hero;