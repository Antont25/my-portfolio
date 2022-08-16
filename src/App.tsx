import React from 'react';
import './App.scss';

import {WhichRouters} from './components/whichRouters/WhichRouters';
import {NavContainer} from './pages/NavContainer';

export const App = () => {
    return (
        <div className={'app'}>
            <NavContainer/>
            <WhichRouters/>
        </div>
    );
}


