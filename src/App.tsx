import React from 'react';
import './App.scss';

import {WhichRouters} from './components/whichRouters/WhichRouters';
import {Header} from './components/header/Header';

export const App = () => {
    return (
        <div className={'app'}>
            <header>
                <Header/>
            </header>
            <main className={'wrapper'}>
                <WhichRouters/>
            </main>
        </div>
    );
}


