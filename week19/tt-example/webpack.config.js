module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            ['@babel/plugin-transform-react-jsx',
                            {pragma: "create"}]
                        ]
                    }
                },
            }
        ]
    },
    plugins: [
        new (require('html-webpack-plugin'))
    ],
    // good to know:
    mode: "development",
    optimization: {
        minimize: false
    },
    devServer: {
        open: true,
        compress: false,
        contentBase: "./src"
    }
}