import React from 'react';
import style from './home.module.scss'
import {Practical} from '../practical/Practical';
import ReactTypingEffect from 'react-typing-effect';
import '../../App.scss'

export const Home = () => {
    return (
        <div className={style.homeBlock}>
            <h1 className={style.name}>ANTON <span>TOLKACHOV_</span></h1>
            <ReactTypingEffect
                staticText="I am"
                text="Front-end Developer"
                className={style.typingText}
            />
            <Practical/>
        </div>

    );
};

