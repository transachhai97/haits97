import { useTranslation } from 'react-i18next';

import { defaultPropsApp, propTypesApp } from '@/components/App/App';

import AppTemplate from './App.pug';

function AppComponent(props) {
    const { t } = useTranslation();

    return (
        AppTemplate.call(this, {
            props,
            t,
        })
    );
}

AppComponent.propTypes = propTypesApp;

AppComponent.defaultProps = defaultPropsApp;

export default AppComponent;
