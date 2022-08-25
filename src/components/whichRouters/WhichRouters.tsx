import React from 'react';
import {Navigate, Route, Routes, useLocation} from 'react-router-dom';
import {Home} from '../home/Home';
import {AboutMe} from '../aboutMe/AboutMe';
import {Portfolio} from '../portfolio/Portfolio';
import {useTransition, animated} from 'react-spring';


export const WhichRouters = () => {
        const location = useLocation()
        const transitions = useTransition(location, {
            from: {opacity: 0, transform: 'translate3d(100%,0,0)'},
            enter: {opacity: 1, transform: 'translate3d(0%,0,0)'},
            leave: {opacity: 0, transform: 'translate3d(-100%,0,0)'},
            exitBeforeEnter: true
        })
        return (
            < >
                {
                    transitions((props, item) => (
                            <animated.div style={{...props}}>
                                <Routes location={item}>
                                    <Route index element={<Home/>}/>
                                    <Route path={'about'} element={<AboutMe/>}/>
                                    {/*<Route path={'/skills'} element={<Skills/>}/>*/}
                                    <Route path={'/portfolio'} element={<Portfolio/>}/>
                                    {/*<Route path={'/contact'} element={<Contact/>}/>*/}
                                    <Route path={'*'} element={<Navigate to={'/note-found'}/>}/>
                                </Routes>
                            </animated.div>
                        )
                    )
                }
            </ >
        );
    }
;



