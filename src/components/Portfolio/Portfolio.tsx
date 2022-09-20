import React from 'react';
import style from './portfolio.module.scss'
import {PortfolioItem} from './PortfolioItem';
import '../../App.scss'
import {NamePage} from '../../common/components/NamePage/NamePage';
import cards from '../../assets/img/cards.jpg'
import film from '../../assets/img/film.jpg'
import social from '../../assets/img/social.jpg'
import pizza from '../../assets/img/pizza.jpg'
import todo from '../../assets/img/todo-lists.jpg'

export const Portfolio = () => {
    return (
        <div className={'container'}>
            <NamePage name={'Portfolio.'} icon={'lnr lnr-briefcase'}/>
            <div className={style.myPortfolioBloc}>
                <PortfolioItem img={cards} title={'Cards'}
                               href="https://antont25.github.io/cards/"
                               whatProject={'Сommercial project'}>
                    Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formik. Organizing correct
                    app arcitecture. Team development: bug fixing, refactoring, deploying.
                </PortfolioItem>
                <PortfolioItem img={todo} title={'Todolist'}
                               href="https://antont25.github.io/todolist/"
                               whatProject={'Self-edication project'}>
                    Stack: TypeScript, React, Redux Toolkit, Redux-thunk, Router-dom, Axios, Mui, Formik. Creating unit
                    tests, bug fixing, refactoring, deploying. Organizing correct app arcitecture.
                </PortfolioItem>
                <PortfolioItem img={social} title={'Social Network'}
                               href="https://antont25.github.io/social-network/"
                               whatProject={'Self-edication project'}>
                    Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios, Formikс, Creating unit tests,
                    bug fixing, deploying.
                </PortfolioItem>
                <PortfolioItem img={film} title={'Movie'}
                               href="https://antont25.github.io/movie/"
                               whatProject={'Self-edication project'}>
                    Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios. Deployin.
                </PortfolioItem>
                <PortfolioItem img={pizza} title={'Pizza'}
                               href="https://antont25.github.io/magazin_pizza/"
                               whatProject={'Self-edication project'}>
                    Stack: TypeScript, React, Redux, Redux-Thunk, React-Router-dom, Axios. Deployin.
                </PortfolioItem>
            </div>
        </div>
    );
};

