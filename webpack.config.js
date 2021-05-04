const path = require('path');
module.exports = {
    entry: {
        index: './src/index.ts',
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist',
        //library: '[name]',
        //libraryTarget: 'amd',
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: 'eval-source-map',
    /*
    plugins: [
        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                env: {
                    jquery: true
                },
            }
        })
    ]
    */
};
