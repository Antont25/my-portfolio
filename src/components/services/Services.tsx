import React from 'react';
import style from './services.module.scss'
import '../../App.scss'

export const Services = () => {
    return (
        <div className={style.servicesBlock}>
            <h2><span className={'subheading'}>SERVICES</span></h2>
            <div className={style.servicesCard}>
                <Service text={'Web Development'}/>
                <Service text={'  Development'}/>
                <Service text={'Web Development'}/>
                <Service text={'Web  '}/>
            </div>
        </div>
    );
};

const Service = (props: ServiceType) => {
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
type ServiceType = {
    text: string
}

