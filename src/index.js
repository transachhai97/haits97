import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

import CNprogress from '@/components/CNprogress/CNprogress';

import '@/index.scss';

const App = React.lazy(() => import('@/App'));

ReactDOM.render(
    <React.StrictMode>
        <Suspense fallback={<CNprogress />}>
            <App name="Trần Sách Hải" />
        </Suspense>
    </React.StrictMode>,
    document.getElementById('root'),
);
