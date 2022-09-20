import React from 'react';
import './App.scss';

import {WhichRouters} from '../common/WhichRouters/WhichRouters';
import {Header} from '../components/Header/Header';
import {BurgerMenu} from '../common/components/BurgerMenu/BurgerMenu';
import '../common/components/BurgerMenu/burgerMenu.css'

export const App = () => {
    return (
        <div className={'app'} id={'app'}>
            <header className={'header_mobile'}>
                <h2>Anton Tolkachev</h2>
            </header>
            <BurgerMenu pageWrapId={'wrapper'} outerContainerId={'app'}/>
            <div className={'deskTop'}>
                <Header/>
            </div>
            <main className={'wrapper'} id={'wrapper'}>
                <WhichRouters/>
            </main>
        </div>
    );
}

