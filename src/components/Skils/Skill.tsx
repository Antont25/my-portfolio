import React, {FC, ReactNode} from 'react';
import style from './skills.module.scss'
import {Progress} from './ProgressBar/Progress';


export const Skill: FC<SkillType> = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
                <img src={props.img} alt={props.img}/>
            </div>
            <h2 className={style.title}>{props.title}</h2>
            <Progress progress={props.progress}/>
            <p className={style.body}>
                {props.children}
            </p>
        </div>
    );
};
//type
type SkillType = {
    progress: number
    title: string
    img?: string
    children: ReactNode
}

