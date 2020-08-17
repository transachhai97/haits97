import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import CNprogress from '@/components/CNprogress/CNprogress';
import ChangeLanguage from '@/components/ChangeLanguage/ChangeLanguage';

import '@/styles/index.scss';

import '@/locales/i18n';

const App = React.lazy(() => import('@/components/App/App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<CNprogress />}>
            <>
                <ChangeLanguage />
                <App name="Trần Sách Hải" />
            </>
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
