import React from 'react';
import '../../App.scss'
import ava from '../../assets/img/my-ava.png'
import {Menu} from '../menu/Menu';
import {Footer} from '../footer/Footer';
import style from './header.module.scss'

export const Header = () => {

    return (
        <div className={style.navContainer}>
            <div className={style.imgBlock}>
                <img src={ava}/>
                <div className={style.name}>
                    ANTON TOLKACHOV
                </div>
            </div>

            <Menu/>
            <Footer/>
        </div>
    );
};