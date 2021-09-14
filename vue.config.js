const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                '@img': path.resolve(__dirname, '/src/assets/img'),
            },
        },
    }
}