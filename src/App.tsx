import React from 'react';
import './App.scss';

import {WhichRouters} from './common/WhichRouters/WhichRouters';
import {Header} from './components/Header/Header';

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


