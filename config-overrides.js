const path = require('path');

module.exports = {
    webpack: function (config, env) {
        config.resolve.alias = Object.assign(config.resolve.alias, {
            '@': path.resolve(__dirname, './src'),
        });

        console.log(config.resolve.alias);
        return config;
    }
};