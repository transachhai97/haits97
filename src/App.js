import React from 'react';
import logo from '@/logo.svg';
import stylesApp from '@/App.scss';

function App() {
    return (
        <div className={stylesApp.app}>
            <header className={stylesApp.header}>
                <img src={logo} className={stylesApp.logo} alt="logo" />
                <p>
                    Edit
                    {' '}
                    <code>src/App.js</code>
                    {' '}
                    and save to reload.
                </p>
                <a
                    className={stylesApp.link}
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
