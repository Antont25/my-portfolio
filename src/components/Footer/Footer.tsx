import React from 'react';
import style from './footer.module.scss'
import '../../App.scss'

export const Footer = () => {
    return (
        <div className={style.footerBloc}>

            <div className={style.icons}>
                <span>
                    <a href="">
                         <i className="fa-brands fa-github  "/>
                    </a>
                </span>
                <span>
                    <a href="">
                         <i className="fa-brands fa-dribbble"/>
                    </a>
                </span>
                <span>
                    <a href="">
                          <i className="fa-brands fa-telegram"/>
                    </a>
                </span>
                <span>
                    <a href="">
                         <i className="fa-brands fa-github"/>
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

