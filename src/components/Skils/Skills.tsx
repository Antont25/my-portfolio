import React from 'react';
import style from './skills.module.scss'
import {Skill} from './Skill';
import '../../App.scss'
import {NamePage} from '../../common/components/NamePage/NamePage';
import js from '../../assets/svg/javascript.svg'
import ts from '../../assets/svg/typescript.svg'
import redux from '../../assets/svg/redux.svg'
import react from '../../assets/svg/react-2.svg'
import html from '../../assets/svg/html-1.svg'
import css from '../../assets/svg/css-3.svg'


export const Skills = () => {


    return (
        <div className={'container'}>
            <NamePage name={'Skills.'} icon={'lnr lnr-cog'}/>
            <div className={style.skillBloc}>
                <h2 style={{textAlign: 'center'}}><span className={'subheading'}>CODING SKILLS</span></h2>
                <div className={style.items}>
                    <Skill progress={82} title={'JavaScript'} img={js}>
                        Multi-paradigm programming language. Supports object-oriented, imperative and functional styles.
                    </Skill>
                    <Skill progress={88} title={'React'} img={react}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                    <Skill progress={80} title={'TypeScript'} img={ts}>
                        A programming language introduced by Microsoft in 2012
                        extends the capabilities of JavaScript.
                    </Skill>
                    <Skill progress={85} title={'Redux'} img={redux}>
                        An open source JavaScript library for managing application state.
                    </Skill>
                    <Skill progress={90} title={'HTML'} img={html}>
                        A standardized hypertext markup language for viewing web pages in a browser.
                    </Skill>
                    <Skill progress={90} title={'CSS'} img={css}>
                        A formal language for describing the appearance of a document written using a markup language.
                    </Skill>
                </div>
            </div>
        </div>
    );
};

