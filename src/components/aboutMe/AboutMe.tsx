import React from 'react';
import '../../App.scss'
import {NamePage} from '../../common/components/namePage/NamePage';
import style from './aboutMe.module.scss'
import {Services} from '../services/Services';
import 'animate.css';


export const AboutMe = () => {
    return (
        <div className={'container'}>
            <NamePage name={'About Me.'} icon={'lnr lnr-user'}/>
            <div className={style.about}>
                <div className={style.textBox}>
                    <h2 className={'headerText'}>Front-end Developer</h2>
                    <p className={'bodyText'}>I'm Front-End developer with experience in creating SPA using
                        React,Redux,Typescript.Ready to
                        consider. I follow market trends, improve my hard skills and English. Ready to consider
                        project
                        work and full-time employment. In the future I see myself as a Full Stack Developer</p>
                </div>
                <div className={style.aboutInfo}>
                    <h2 className={'headerText'}>Personal Information</h2>
                    <ul>
                        <li>
                            <span className={style.title}>Name</span>
                            <span className={style.value}>Anton Tolkachov</span>
                        </li>
                        <li>
                            <span className={style.title}>Age</span>
                            <span className={style.value}>27 Years</span>
                        </li>
                        <li>
                            <span className={style.title}>Residence</span>
                            <span className={style.value}>Kyiv, Ukraine</span>
                        </li>
                        <li>
                            <span className={style.title}>Email</span>
                            <span className={style.value}>antontolkachevdev@gmail.com</span>
                        </li>
                        <li>
                            <span className={style.title}>Phone</span>
                            <span className={style.value}>380508837112</span>
                        </li>

                    </ul>
                </div>
            </div>
            <Services/>
        </div>
    );
};





