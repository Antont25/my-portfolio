import React from 'react';
import style from './contactIcon.module.scss'

export const ContactIcon = (props: ContactIconType) => {

    const hover = props.href ? style.hoverItem : ''

    return (
        <div className={style.iconBloc}>
            <span className={`${style.icon} ${hover}`}>
                <a href={props.href} target="_blank">
                     <i className={props.classIcon}/>
                </a>
            </span>
            <h5>{props.text}</h5>
        </div>
    );
};
//type
type ContactIconType = {
    classIcon: string
    text: string
    href?: string
}

