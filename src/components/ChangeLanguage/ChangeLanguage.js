import { useTranslation } from 'react-i18next';

import ChangeLanguageTemplate from './ChangeLanguage.pug';

function ChangeLanguage() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (event) => {
        const lng = event.target.value;
        if (lng !== i18n.language) {
            i18n.changeLanguage(lng);
        }
    };

    return (
        ChangeLanguageTemplate.call(this, {
            t,
            i18n,
            changeLanguage,
        })
    );
}

export default ChangeLanguage;
