const path = require('path');
module.exports = {
    entry: {
        index: './src/index.ts',
    },
    mode:'development',
    target: 'node', // in order to ignore built-in modules like path, fs, etc. 
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                // exclude:path.resolve(__dirname, "node_modules")
								exclude: "/node_modules/"
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist',
        //library: '[name]',
        //libraryTarget: 'amd',
				environment: {
					arrowFunction: false,
				}	
				
    },
    externals: {
        jquery: 'jQuery'
    },
    devtool: false,
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
