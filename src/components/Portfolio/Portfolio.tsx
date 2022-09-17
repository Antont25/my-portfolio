import React from 'react';
import style from './portfolio.module.scss'
import {PortfolioItem} from './PortfolioItem';
import '../../App.scss'
import {NamePage} from '../../common/components/NamePage/NamePage';
import cards from '../../assets/img/cards.jpg'
import film from '../../assets/img/film.jpg'
import social from '../../assets/img/social.jpg'
import pizza from '../../assets/img/pizza.png'
import todo from '../../assets/img/todo-lists.jpg'

export const Portfolio = () => {
    return (
        <div className={'container'}>
            <NamePage name={'Portfolio.'} icon={'lnr lnr-briefcase'}/>
            <div className={style.myPortfolioBloc}>
                <PortfolioItem img={cards}/>
                <PortfolioItem img={film}/>
                <PortfolioItem img={social}/>
                <PortfolioItem img={todo}/>
                <PortfolioItem img={todo}/>
            </div>
        </div>
    );
};

