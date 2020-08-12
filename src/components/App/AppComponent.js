import { useTranslation } from 'react-i18next';

import { defaultPropsApp, propTypesApp } from '@/components/App/App';

import logo from '@/assets/images/logo.svg';

import AppTemplate from './App.pug';
import stylesApp from './css/App.scss';

function AppComponent(props) {
    const { t } = useTranslation();

    return (
        AppTemplate.call(this, {
            props,
            stylesApp,
            t,
            logo,
        })
    );
}

AppComponent.propTypes = propTypesApp;

AppComponent.defaultProps = defaultPropsApp;

export default AppComponent;
