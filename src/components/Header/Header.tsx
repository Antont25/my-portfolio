import React from 'react';
import '../../app/App.scss'
import ava from '../../assets/img/my-ava.png'
import {Menu} from '../../common/components/Menu/Menu';
import {Footer} from '../Footer/Footer';
import style from './header.module.scss'


export const Header = (props: HeaderParams) => {
    return (
        <div className={style.navContainer}>
            <div className={style.imgBlock}>
                <img src={ava}/>
                <div className={style.name}>
                    ANTON TOLKACHOV
                </div>
            </div>
            <Menu setIsOpen={props.setIsOpen}/>
            <Footer/>
        </div>
    );
};
//type
type HeaderParams = {
    setIsOpen?: () => void
};