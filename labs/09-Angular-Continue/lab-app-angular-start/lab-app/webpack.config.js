const path = require('path');
const webpack = require('webpack');

const clientBundleOutputDir = './wwwroot/dist';

module.exports = {
    entry: {
        'main-client': './App/app.ts'
    },
    output: {
        filename: '[name].js',
        publicPath: 'dist/',
        path: path.join(__dirname, clientBundleOutputDir)
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/, include: /App/, use:
                    ['awesome-typescript-loader?silent=true',
                        'angular2-template-loader']
            },
            { test: /\.html$/, use: 'html-loader?minimize=false' },
            { test: /\.css$/, use: ['to-string-loader', 'css-loader'] },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/,
                use: 'url-loader?limit=25000'
            }
        ]
    },
    devtool: 'source-map'
}
