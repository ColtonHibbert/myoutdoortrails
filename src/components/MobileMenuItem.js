import React from 'react';

export const MobileMenuItem = ({text, clickFunction, link }) => {
    return (
        <div className="w-100 pointer"
            onClick={clickFunction}
        >
            <a href={link} className="w-100 w-100 flex flex-row justify-between items-center pv2 ph3 dim pointer bb b--white-40 no-underline">
                <div className="flex white">{text}</div>
                <svg className="flex blue h1 w1" fill="white" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z"></path></svg>
            </a>
        </div>
    )
}

export default MobileMenuItem;