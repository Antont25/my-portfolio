import React from 'react';
import style from './portfolio.module.scss'
import {PortfolioItem} from './PortfolioItem';
import '../../App.scss'
import {NamePage} from '../../common/components/namePage/NamePage';

export const Portfolio = () => {
    return (
        <div className={'container'}>
            <NamePage name={'Portfolio.'} icon={'lnr lnr-briefcase'}/>
            <div className={style.myPortfolioBloc}>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
                <PortfolioItem/>
            </div>
        </div>
    );
};

