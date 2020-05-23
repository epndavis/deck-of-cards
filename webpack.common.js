const path = require('path')

module.exports = {
    entry: './src/deck.ts',
    output: {
        filename: 'deck.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    }
}
