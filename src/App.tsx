import React from 'react';
import './App.scss';

import {WhichRouters} from './common/WhichRouters/WhichRouters';
import {Header} from './components/Header/Header';
import {BurgerMenu} from './components/BurgerMenu/BurgerMenu';
import './components/BurgerMenu/burgerMenu.css'

export const App = () => {
    return (
        <>
            <div className={'app'} id={'app'}>
                <div className={'header_mobile'}>
                    <h2>Anton Tolkachev</h2>
                </div>
                <header>
                    <BurgerMenu pageWrapId={'wrapper'} outerContainerId={'app'}/>
                    <div className={'deskTop'}>
                        <Header/>
                    </div>
                </header>
                <main className={'wrapper'} id={'wrapper'}>
                    <WhichRouters/>
                </main>
            </div>
        </>
    );
}

