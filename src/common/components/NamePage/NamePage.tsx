import React from 'react';
import style from './namePage.module.scss'


export const NamePage = (props: NamePageType) => {
    return (
        <div className={style.block}>
            <div className={style.namePage}>
                {props.name}
            </div>
            <div className={style.iconPage}>
                <i className={props.icon}/>
            </div>
        </div>
    );
};

//type

type NamePageType = {
    name: string
    icon: string
}
