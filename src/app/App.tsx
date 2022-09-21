import React, {useEffect, useState} from 'react';
import './App.scss';
import {WhichRouters} from '../common/WhichRouters/WhichRouters';
import {Header} from '../components/Header/Header';
import {BurgerMenu} from '../common/components/BurgerMenu/BurgerMenu';
import '../common/components/BurgerMenu/burgerMenu.css'
import axios from 'axios';
import {Loading} from '../common/components/Loading/Loading';


export const App = () => {
    const [url, setUrl] = useState('');
    useEffect(() => {
        const uploadHandler = async () => {
            const res = await axios.get('Depositphotos.jpg', {responseType: 'blob'})
            const blob = new Blob([res.data], {type: 'image/jpeg'});
            const fileURL = window.URL.createObjectURL(blob);
            setUrl(fileURL)
        }
        uploadHandler()
    }, []);

    if (!url) {
        return <div style={{height: '100vh', display: 'flex', alignItems: 'center'}}><Loading/></div>
    }

    return (
        <div className={'app'} id={'app'}>
            <header className={'header_mobile'}>
                <h2>Anton Tolkachev</h2>
            </header>
            <BurgerMenu pageWrapId={'wrapper'} outerContainerId={'app'}/>
            <div className={'deskTop'}>
                <Header/>
            </div>
            <main className={'wrapper'} id={'wrapper'}>
                <WhichRouters img={url}/>
            </main>
        </div>
    );
}

