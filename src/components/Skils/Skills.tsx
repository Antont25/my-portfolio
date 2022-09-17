import React from 'react';
import style from './skills.module.scss'
import {Skill} from './Skill';
import '../../App.scss'
import {NamePage} from '../../common/components/NamePage/NamePage';
import js from '../../assets/svg/logo-javascript.svg'
import ts from '../../assets/svg/typescript-2.svg'
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
                    <Skill progress={80} title={'JavaScript'} img={js}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                    <Skill progress={80} title={'React'} img={react}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                    <Skill progress={80} title={'TypeScript'} img={ts}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                    <Skill progress={80} title={'Redux'} img={redux}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                    <Skill progress={80} title={'HTML'} img={html}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                    <Skill progress={80} title={'CSS'} img={css}>
                        An open source JavaScript library for developing user interfaces.
                    </Skill>
                </div>
            </div>
        </div>
    );
};

