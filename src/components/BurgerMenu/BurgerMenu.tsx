import React, {useState} from 'react';
import {slide as Menu} from 'react-burger-menu';
import './burgerMenu.css'
import {Header} from '../Header/Header';


export const BurgerMenu = (props: any) => {

    const [isOpen, setIsOpen] = useState(false)

    const setIsOpenHandler = () => {
        setIsOpen(false)
    }
    const handleStateChange = (state: { isOpen: boolean }) => {
        setIsOpen(state.isOpen)
    }

    return (
        <Menu {...props} isOpen={isOpen} onStateChange={(state) => handleStateChange(state)}>
            <Header setIsOpen={setIsOpenHandler}/>
        </Menu>
    );
};
