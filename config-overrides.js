/* eslint-disable */
const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    webpack: function (config, env) {
        const isProduction = env === 'production';

        config.devtool = isProduction ? 'cheap-module-source-map' : 'source-map';
        config.optimization.runtimeChunk = false;
        config.optimization.splitChunks = false;

        config.resolve.alias = Object.assign(config.resolve.alias, {
            '@': path.resolve(__dirname, './src'),
        });

        config.plugins.push(
            new StyleLintPlugin({
                files: ['src/**/*.{js,jsx,htm,html,css,sss,less,scss,sass}'],
            }),
        );

        config.output.filename = isProduction ? 'static/js/[name].[contenthash:8].js' : 'static/js/[name].[hash].js';
        config.plugins[4].options.filename = 'static/css/[name].[contenthash:8].css';
        config.module.rules[2].oneOf[0].options.name = 'static/media/[name].[hash:8].[ext]';
        config.module.rules[2].oneOf[7].options.name = 'static/media/[name].[hash:8].[ext]';

        config.optimization.minimizer[0].options.extractComments = false;
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;

        config.module.rules[2].oneOf[5].use[1].options = {
            modules: {
                localIdentName: '[name]__[local]--[hash:base64:5]',
            },
        };

        return config;
    },
};
