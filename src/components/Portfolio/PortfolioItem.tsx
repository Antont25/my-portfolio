import React, {ReactNode} from 'react';
import style from './portfolio.module.scss'

export const PortfolioItem = (props: PortfolioItemParams) => {
    return (
        <div className={style.portfolioItems}>
            <a className={style.imgBloc} href={props.href} target="_blank">
                <img src={props.img} alt={props.img}/>
                <div className={style.infoBlock}>
                    <h3> {props.title}</h3>
                    <span>{props.whatProject}</span>
                    <p>{props.children}</p>
                </div>
            </a>
        </div>
    );
};
//type
type PortfolioItemParams = {
    img: string
    href: string
    title: string
    whatProject: string
    children: ReactNode
};
