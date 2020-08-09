import React, { useEffect } from 'react';

import NProgress from 'nprogress';

import GlobalLoading from '@/components/GlobalLoading/GlobalLoading';

import 'nprogress/nprogress.css';

const CNprogress = () => {
    useEffect(() => {
        NProgress.start();

        return () => {
            NProgress.done();
        };
    }, []);

    return <GlobalLoading />;
};

export default CNprogress;
