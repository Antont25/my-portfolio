import React from 'react';
import style from './services.module.scss'
import '../../App.scss'
import {Servicec} from './Servicec/Servicec';

export const Services = () => {
    return (
        <div className={style.servicesBlock}>
            <h2><span className={'subheading'}>SERVICES</span></h2>
            <div className={style.servicesCard}>
                <Servicec text={'Web Development'}/>
                <Servicec text={'Development'}/>
                <Servicec text={'Web Development'}/>
                <Servicec text={'Web  '}/>
            </div>
        </div>
    );
};



