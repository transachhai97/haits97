const path = require('path');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
    webpack: function (config, env) {
        const isProduction = env === 'production';

        config.devtool = isProduction ? 'cheap-module-source-map' : 'source-map';

        config.resolve.alias = Object.assign(config.resolve.alias, {
            '@': path.resolve(__dirname, './src'),
        });

        config.plugins.push(
            new StyleLintPlugin({
                files: [`src/**/*.{js,jsx,htm,html,css,sss,less,scss,sass}`],
            }),
        );

        config.optimization.minimizer[0].options.extractComments = false;
        config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true;

        return config;
    }
};
