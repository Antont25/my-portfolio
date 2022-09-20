import React from 'react';
import style from './footer.module.scss'
import '../../app/App.scss'

export const Footer = () => {
    return (
        <div className={style.footerBloc}>
            <div className={style.icons}>
                <span>
                    <a href="https://github.com/Antont25" target="_blank">
                         <i className="fa-brands fa-github  "/>
                    </a>
                </span>
                <span>
                    <a href="https://www.codewars.com/users/toxa123439" target="_blank">
                         <i className="fa-brands fa-dribbble"/>
                    </a>
                </span>
                <span>
                    <a href="https://t.me/antontolkachovdev" target="_blank">
                          <i className="fa-brands fa-telegram"/>
                    </a>
                </span>
                <span>
                    <a href="https://www.linkedin.com/in/anton-tolkachov-dev/" target="_blank">
                         <i className="fa-brands fa-linkedin-in"/>
                    </a>
                </span>

            </div>
            <div className={style.text}>
                2022 © Cosmos-Themes.
                All Right Reserved.
            </div>
        </div>
    );
};

