import style from '../services.module.scss';
import React from 'react';

export const Servicec = (props: ServicecType) => {
    return (
        <div className={style.cardsItem}>
            <div className={style.icon}>
                <i aria-hidden="true" className="lnr lnr lnr lnr-laptop"/>
            </div>

            <h3>{props.text}</h3>
            <span>Amet aspernatur delectus maxime ducimus similique Ratione asperiores corporis provident aut</span>
        </div>
    )
}
type ServicecType = {
    text: string
}