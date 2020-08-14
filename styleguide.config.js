const path = require("path");

module.exports = {
    webpackConfig: {
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }
            ]
        }
    },
    title: "Modal This Docs",
    styleguideDir: "dist-docs",
    moduleAliases: {
        "modal-this": path.resolve(__dirname, "src")
    }
};