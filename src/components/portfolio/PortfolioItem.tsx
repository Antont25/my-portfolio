import React from 'react';
import style from './portfolio.module.scss'
import imgPortfolio from '../../common/img/6.jpg'

export const PortfolioItem = () => {
    return (
        <div className={style.portfolioItems}>
            <div className={style.imgBloc}>
                <img src={imgPortfolio} alt="IMG_PORTFOLIO"/>
                <h3> названия</h3>
            </div>
        </div>
    );
};

