import style from '../services.module.scss';
import React from 'react';

export const Servicec = (props: ServicecType) => {
    return (
        <div className={style.cardsItem}>
            <div className={style.icon}>
                <i aria-hidden="true" className={props.icon}/>
            </div>

            <h3>{props.title}</h3>
            <span>
                {props.children}
            </span>
        </div>
    )
}
type ServicecType = {
    title: string
    children: React.ReactNode
    icon: string
}