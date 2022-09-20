import React from 'react';
import style from './menu.module.scss'
import {NavLink} from 'react-router-dom';


export const Menu = (props: MenuType) => {
    return (
        <div className={style.menuBloc}>
            <ul className={style.items}>
                <Item title={'HOME'} to={'/'} classNameIcon={'lnr lnr-home'} setIsOpen={props.setIsOpen}/>
                <Item title={'ABOUT ME'} to={'/about'} classNameIcon={'lnr lnr-user'} setIsOpen={props.setIsOpen}/>
                <Item title={'SKILLS'} to={'/skills'} classNameIcon={'lnr lnr-cog'} setIsOpen={props.setIsOpen}/>
                <Item title={'PORTFOLIO'} to={'/Portfolio'} classNameIcon={'lnr lnr-briefcase'}
                      setIsOpen={props.setIsOpen}/>
                <Item title={'CONTACT'} to={'/contact'} classNameIcon={'lnr lnr-envelope'} setIsOpen={props.setIsOpen}/>
            </ul>
        </div>
    );
}

const Item = (props: ItemType) => {
    const setActive = ({isActive}: any) => isActive ? style.isActive : ''

    return (
        <li className={style.item} onClick={props.setIsOpen}>
            <NavLink to={props.to} className={setActive}>
                <span className={style.icon}><i className={props.classNameIcon}/></span>
                {props.title}
            </NavLink>
        </li>
    )
}
//type
type ItemType = {
    to: string
    classNameIcon: string
    title: string
    setIsOpen?: () => void
}
type MenuType = {
    setIsOpen?: () => void
};
