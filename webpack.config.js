const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:{
        app:'./src/main.ts',
    },
    devtool:'inline-source-map',
    module:{
        rules:[
            {
                test:/(\.tsx?$|text$)/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.less$/,
                use:[
                    {loader:'style-loader'},
                    {loader:'css-loader'},
                    {loader:'less-loader'}
                ],
                exclude:/node_modules/
            }
        ]
    },
    resolve:{
        extensions:['.ts','.js']
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'WebGL Game',
            meta:{
                viewport:'width=device-width, initial-scale=1.0',
            }
        })
    ],
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'dist')
    }
 }
