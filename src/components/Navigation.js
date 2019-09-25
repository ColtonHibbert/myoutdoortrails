import React from 'react';
import { store } from '../index.js';


export const Navigation = ({ displaySignUpModalAction, displayLogInModalAction, signOut, loggedIn, isMobile, displayMobileMenuAction, name }) => {
    return (
        <div>
            <nav className="
                w-100 flex flex-row justify-between items-center ph3 pv3
                flex-column-ns
                flex-column-m 
                flex-row-l"
            >
                <div className="">
                    <div className="flex items-center">
                        <a className="w-100 flex " href="#" title="Home">
                            <div className="dib w2 h2">
                                <svg className="white br-100" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"></path></svg>
                            </div>
                        </a>
                        <h1 
                            className="flex f5 f4-ns f3-m f2-l pl1 ma0"
                        >MyOutdoorTrails</h1>
                    </div>
                </div>
                {
                    isMobile ?
                    <div
                        onClick={() => displayMobileMenuAction()}
                    >
                        <svg className="w2 h2 flex items-center pa0 ma0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                    </div>
                    : ''
                }
                {
                    isMobile ? ''
                    : 
                    <div 
                    className="w-100 h2 mt3 flex items-center justify-center tc
                    justify-end-l
                    ">
                        <div className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Featured"><a href="#featuredhikes" className="no-underline dark-gray">Featured Hikes</a></div>
                    {
                        loggedIn ? 
                        <div className="flex flex-row items-center">
                            <div className="link dim dark-gray f6 f5-l dib pointer" 
                                onClick={signOut}
                            >Sign Out</div>
                            <div className="flex self-end pl3">Welcome {name}</div>
                        </div>
                        :
                        <div className="flex">
                            <div
                            className="link dim dark-gray f6 f5-l dib mr3 mr4-l pointer" title="Log in"
                                onClick={displayLogInModalAction}
                            >Log in</div>
                            <div className="link dim dark-gray f6 f5-l dib pointer" title="Sign up"
                                onClick={displaySignUpModalAction}
                            >Sign Up</div>
                        </div>
                    }
                    </div>
                }
            </nav>
        </div>
    )
}

export default Navigation;