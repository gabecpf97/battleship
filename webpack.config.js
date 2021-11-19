const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/js/index.js',
        ship: './src/js/ship.js',
        gameboard: './src/js/gameboard.js',
        player: './src/js/player.js',
        displayBoard: './src/js/displayBoard.js',
        startGame: '/src/js/startGame.js',
        computerMove: '/src/js/computerMove.js',
        render: '/src/js/render.js', 
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html'
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        publicPath: '',
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};