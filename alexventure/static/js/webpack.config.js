var path = require("path");
var webpack = require("webpack");
var BundleTracker = require("webpack-bundle-tracker");

module.exports = {
    context: __dirname,
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./alexventure.jsx"
    ], // App entry point
    output: {
        path: path.resolve("./bundles/"),
        filename: "[name]-[hash].js",
        publicPath: "http://localhost:3000/bundles/"
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BundleTracker({filename: "./webpack-stats.json"}),
    ],

    module: {
        loaders: [
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel"] }
        ],
    },

    resolve: {
        modulesDirectories: ["node_modules", "bower_components"],
        extensions: ["", ".js", ".jsx"]
    },
}
