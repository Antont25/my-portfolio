import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {Home} from '../home/Home';
import {AboutMe} from '../aboutMe/AboutMe';


export const WhichRouters = () => {
    return (
        <Routes>
            <Route index element={<Home/>}/>
            <Route path={'about'} element={<AboutMe/>}/>
            {/*<Route path={'/skills'} element={<Skills/>}/>*/}
            {/*<Route path={'/portfolio'} element={<Portfolio/>}/>*/}
            {/*<Route path={'/contact'} element={<Contact/>}/>*/}
            <Route path={'*'} element={<Navigate to={'/note-found'}/>}/>
        </Routes>

    );
};



