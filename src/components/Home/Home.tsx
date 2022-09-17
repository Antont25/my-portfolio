import React from 'react';
import style from './home.module.scss'
import {Practical} from '../Practical/Practical';
import ReactTypingEffect from 'react-typing-effect';
import '../../App.scss'
import 'animate.css';


export const Home = () => {
    return (
        <div className={style.homeBlock}>
            <h1 className={style.name}>ANTON <span>TOLKACHOV_</span></h1>
            <ReactTypingEffect
                typingDelay={1000}
                eraseDelay={1000}
                eraseSpeed={70}
                speed={70}
                staticText="I am"
                text="Front-end Developer"
                className={style.typingText}
            />
            <Practical/>
        </div>
    );
};

