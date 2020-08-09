import React from 'react';
import PropTypes from 'prop-types';

import logo from '@/assets/images/logo.svg';
import stylesApp from './css/App.scss';

function App(props) {
    const { name } = props;

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
                <h1>{name}</h1>
            </header>
        </div>
    );
}

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: 'Hai',
};

export default App;
