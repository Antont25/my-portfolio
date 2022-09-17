import React from 'react';
import style from './services.module.scss'
import '../../App.scss'
import {Servicec} from './Servicec/Servicec';

export const Services = () => {
    return (
        <div className={style.servicesBlock}>
            <h2><span className={'subheading'}>SERVICES</span></h2>
            <div className={style.servicesCard}>
                <Servicec title={'Web Development'}
                          icon={'lnr lnr lnr lnr-laptop'}>
                    The process of creating a website or web application. The main
                    stages of the process are web design, page layout, client and server side programming, and web
                    server configuration.
                </Servicec>
                <Servicec title={'Web Design'}
                          icon={'lnr lnr lnr lnr-eye'}>
                    A branch of web development and a type of design whose task is to design
                    web user interfaces for websites or web applications.
                </Servicec>
                <Servicec title={'Responsive Design'}
                          icon={'lnr lnr lnr lnr-laptop-phone'}>
                    Web page design that ensures the correct display of the site on
                    various devices connected to the Internet, and dynamically adjusts to the specified size of the
                    browser window.
                </Servicec>
                {/*<Servicec title={'Web  '}>ss</Servicec>*/}
            </div>
        </div>
    );
};



