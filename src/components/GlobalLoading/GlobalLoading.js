import React from 'react';

import IconLoading from '@/assets/icons/loading.svg';

import stylesGlobalLoading from './css/GlobalLoading.scss';

function GlobalLoading() {
    return (
        <div
            className={stylesGlobalLoading['global-loading']}
            style={{
                background: `url(${IconLoading}) center no-repeat rgba(0,0,0,.8)`,
            }}
        />
    );
}

export default GlobalLoading;
