
import React, { useState, useInsertionEffect, useEffect } from 'react';

const SlowComponent = ({text}) => {
    const [content, setContent] = useState('');
    useEffect(() => {
        setTimeout(() => {
            setContent(text);
        }, 500);
    }, [text]);

    return <div>{content}</div>;
};

const ThemeSwitcher = () => {
    const [theme, setTheme] = useState('light');

    useInsertionEffect(() => {
        document.body.style.backgroundColor = theme === 'light' ? '#fff' : '#333';
        document.body.style.color = theme === 'light' ? '#000' : '#fff';
    }, [theme]);

    return (
        <div>
            <h1>Current Theme: {theme}</h1>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                Toggle Theme
            </button>
            <SlowComponent text={theme} />
        </div>
    );
};

export default ThemeSwitcher;
