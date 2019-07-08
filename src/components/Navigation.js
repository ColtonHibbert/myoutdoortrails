import React from 'react';

export const Navigation = () => {
    return (
        <div>
            <nav class="db dt-l w-100 border-box pa3 ph5-l">
                <a class="db dtc-l v-mid mid-gray link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <div className="dib w2 h2 br-100">
                        <svg aria-hidden="true"  focusable="false" data-prefix="fas" data-icon="hiking" class="bg-blue" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M80.95 472.23c-4.28 17.16 6.14 34.53 23.28 38.81 2.61.66 5.22.95 7.8.95 14.33 0 27.37-9.7 31.02-24.23l25.24-100.97-52.78-52.78-34.56 138.22zm14.89-196.12L137 117c2.19-8.42-3.14-16.95-11.92-19.06-43.88-10.52-88.35 15.07-99.32 57.17L.49 253.24c-2.19 8.42 3.14 16.95 11.92 19.06l63.56 15.25c8.79 2.1 17.68-3.02 19.87-11.44zM368 160h-16c-8.84 0-16 7.16-16 16v16h-34.75l-46.78-46.78C243.38 134.11 228.61 128 212.91 128c-27.02 0-50.47 18.3-57.03 44.52l-26.92 107.72a32.012 32.012 0 0 0 8.42 30.39L224 397.25V480c0 17.67 14.33 32 32 32s32-14.33 32-32v-82.75c0-17.09-6.66-33.16-18.75-45.25l-46.82-46.82c.15-.5.49-.89.62-1.41l19.89-79.57 22.43 22.43c6 6 14.14 9.38 22.62 9.38h48v240c0 8.84 7.16 16 16 16h16c8.84 0 16-7.16 16-16V176c.01-8.84-7.15-16-15.99-16zM240 96c26.51 0 48-21.49 48-48S266.51 0 240 0s-48 21.49-48 48 21.49 48 48 48z"></path></svg>
                    </div>
                </a>
                <h1>MyOutdoorTrails</h1>
                <div class="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Best Hikes">Best Hikes</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Featured">Featured</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Forum">Forum</a>
                    <a class="link dim dark-gray f6 f5-l dib mr3 mr4-l" href="#" title="Sign in">Sign in</a>
                    <a class="link dim dark-gray f6 f5-l dib" href="#" title="Sign up">Sign Up</a>
                </div>
            </nav>
        </div>
    )
}

export default Navigation;