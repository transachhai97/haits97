import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import AppTemplate from './App.pug';

function App(props) {
    const { t } = useTranslation();

    return (
        AppTemplate.call(this, {
            props,
            t,
        })
    );
}

App.propTypes = {
    name: PropTypes.string,
};

App.defaultProps = {
    name: 'Hai',
};

export default App;
