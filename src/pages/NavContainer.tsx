import React from 'react';
import '../App.scss'
import ava from '../assets/img/my-ava.png'
import {Menu} from '../components/menu/Menu';
import {Footer} from '../components/footer/Footer';

export const NavContainer = () => {

    return (
        <div className={'navContainer'}>
            <div className={'imgBlock'}>
                <img src={ava}/>
                <div className={'name'}>
                    ANTON TOLKACHOV
                </div>
            </div>

            <Menu/>
            <Footer/>
        </div>
    );
};