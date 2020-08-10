import React from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { defaultPropsApp, propTypesApp } from '@/components/App/App';

import logo from '@/assets/images/logo.svg';
import stylesApp from './css/App.scss';

function AppComponent(props) {
    const { t } = useTranslation();
    const { name } = props;

    return (
        <>
            <Helmet>
                <title>My Title</title>
            </Helmet>
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
                    <h1>{`${t('hello')} ${name}`}</h1>
                </header>
            </div>
        </>
    );
}

AppComponent.propTypes = propTypesApp;

AppComponent.defaultProps = defaultPropsApp;

export default AppComponent;
