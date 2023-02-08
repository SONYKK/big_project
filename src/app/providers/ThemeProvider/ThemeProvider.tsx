import React, {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext} from './ThemeContext';

const ThemeProvider: FC = ({children}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as THEME || THEME.DARK
    const [theme, setTheme] = useState<THEME>(defaultTheme)



    const defaultProps = useMemo(() => ({
        theme ,
        setTheme
    }), [theme])
    return (
        <ThemeContext.Provider value={
            defaultProps
        }>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;