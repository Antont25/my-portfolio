import React from 'react';
import style from './menu.module.scss'
import {NavLink} from 'react-router-dom';

export const Menu = () => {
    const setActive = ({isActive}: any) => isActive ? style.isActive : ''
    return (
        <div className={style.menuBloc}>
            <ul className={style.items}>
                <li className={style.item}>
                    <NavLink to={'/'} className={setActive}>
                    <span className={style.icon}>
                        <i className="lnr lnr-home"/>
                    </span>
                        HOME
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to={'/about'} className={setActive}>
                        <span className={style.icon}><i className="lnr lnr-user"/></span>
                        ABOUT MY
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to={'/skills'} className={setActive}>
                        <span className={style.icon}><i className="lnr lnr-cog"/></span>
                        SKILLS
                    </NavLink></li>
                <li className={style.item}>
                    <NavLink to={'/portfolio'} className={setActive}>
                        <span className={style.icon}><i className="lnr lnr-briefcase"/></span>
                        PORTFOLIO
                    </NavLink>
                </li>
                <li className={style.item}>
                    <NavLink to={'/contact'} className={setActive}>
                        <span className={style.icon}><i className="lnr lnr-envelope"/></span>
                        CONTACT
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
