import React from 'react';

export const MobileMenu = (props) => {
    return (
        <div className="flex flex-column justify-center items-center bg-gray">
            {props.children}
                    
        </div>
    )
}

export default MobileMenu;