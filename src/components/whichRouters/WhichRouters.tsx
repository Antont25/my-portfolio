import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {AboutMy} from '../aboutMy/AboutMy';


export const WhichRouters = () => {
    return (
        <Routes>
            <Route index element={<AboutMy/>}/>
            {/*<Route path={'/skills'} element={<Skills/>}/>*/}
            {/*<Route path={'/portfolio'} element={<Portfolio/>}/>*/}
            {/*<Route path={'/contact'} element={<Contact/>}/>*/}
            <Route path={'*'} element={<Navigate to={'/note-found'}/>}/>
        </Routes>

    );
};



