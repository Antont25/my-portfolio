import React from 'react';
import style from './contactIcon.module.scss'

export const ContactIcon = (props: ContactIconType) => {
    return (
        <div className={style.iconBloc}>
            <span className={style.icon}> <i className={props.classIcon}/></span>
            <h5>{props.text}</h5>
        </div>
    );
};
//type
type ContactIconType = {
    classIcon: string
    text: string
}

