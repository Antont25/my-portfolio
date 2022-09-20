import React from 'react';
import '../../app/App.scss'
import {NamePage} from '../../common/components/NamePage/NamePage';
import style from './aboutMe.module.scss'
import {Services} from '../Services/Services';
import 'animate.css';
import {Button} from '../../common/components/Button/Button';
import axios from 'axios';

export const AboutMe = () => {

    const uploadHandler = async () => {
        const res = await axios.get('resume.pdf', {responseType: 'blob'})
        const blob = new Blob([res.data], {type: 'application / pdf'});
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Anton-cv.pdf';
        alink.click();
        alink.remove()
    }

    return (
        <div className={'container'}>
            <NamePage name={'About Me.'} icon={'lnr lnr-user'}/>
            <div className={style.about}>
                <div className={style.textBox}>
                    <h2 className={'headerText'}>Front-end Developer</h2>
                    <p className={'bodyText'}> I am a Front-End Developer with experience building SPA using React,
                        Redux, Typescript. I follow market trends and improve my skills. I'm planning to study Node.js,
                        because in the future i see myself as a Full-stack developer. In my spare time I decide tasks on
                        Codewars and I improve my English. Willing to consider project work and full time
                        employment.</p>
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
                            <span className={style.value}>Chernihiv, Ukraine</span>
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
                    <div className={style.btn}>
                        <Button type={'button'}
                                name={'Download Resume'}
                                callback={uploadHandler}/>
                    </div>
                </div>
            </div>
            <Services/>
        </div>
    );
};





