import React from 'react';
import style from './portfolio.module.scss'

type PortfolioItemParams = {
    img: string
};
export const PortfolioItem = (props: PortfolioItemParams) => {
    return (
        <div className={style.portfolioItems}>
            <div className={style.imgBloc}>
                <img src={props.img} alt={props.img}/>
                <h3> названия</h3>
            </div>
        </div>
    );
};

