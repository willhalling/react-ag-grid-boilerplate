var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
    entry: APP_DIR + '/index.jsx',
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module : {
        loaders : [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            }
        ]
    },

    /**
     * loading css
     * You need 1) the core ag-Grid css and 2) a theme. These are stored in css files packaged in the core ag-Grid.
     * To access them, first up we need to define an alias to use inside webpack.config.js:
     */
    resolve: {
        alias: {
            "ag-grid-root" : __dirname + "/node_modules/ag-grid"
        }
    }

};

module.exports = config;