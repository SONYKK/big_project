import React, {Suspense} from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {UseTheme} from "app/providers/ThemeProvider";
import { classNames } from 'shared/lib/classNames/classNames';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';


const App = () => {

    const {theme, toggleTheme} = UseTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/'} >Main</Link>
            <Link to={'/about'}>About us</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route element={<AboutPage/>} path={'/about'}/>
                    <Route element={<MainPage/>} path={'/'}/>
                </Routes>
            </Suspense>

        </div>
    );
};

export default App;