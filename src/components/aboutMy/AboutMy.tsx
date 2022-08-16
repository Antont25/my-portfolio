import React from 'react';

import style from './bloc.module.scss'
import {Practical} from '../practical/Practical';

export const AboutMy = () => {
    return (
        <div className={style.myBloc}>

            <Practical/>
            <div className={`${'commonStyle.container'}  ${style.aboutMe}`}>
                <div className={style.info}>
                    <h1 className={'commonStyle.textH1'}>ANTON <span style={{color: '#d08081'}}>TOLKACHOV_</span></h1>
                    <p className={'commonStyle.textBody'}>Frontend Developer</p>
                    <p className={'commonStyle.textBody'}><b> AGE: </b> 23</p>
                    <p className={'commonStyle.textBody'}><b>EMAIL: </b> mail@mail.com</p>
                    <p className={'commonStyle.textBody'}><b>ADDRESS: </b> Melbourne Victoria 3000 Australia</p>
                </div>

            </div>
        </div>
    );
};

