var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    context: __dirname,
    entry: './alexventure.jsx',

    output: {
        path: path.resolve('./bundles/'),
        filename: "[name]-[hash].js"
    },

    plugins: [],

    module: {
        loaders: []
    },

    resolve: {
        modulesDirectories: ['node_modules', 'bower_components'],
        extensions: ['', '.js', '.jsx']
    }
}