/*const modoDEV = process.env.NODE_ENV !== 'production'
const Webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('Uglyfyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optmize-css-assets-webpack-plugin')


module.exports = {
    mode: modoDEV ? 'development' : 'production',
    entry: './src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJSPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
            rules:[{
                test:/\.s?[ac]ss$/,
                //test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                //'style-loader', //Adiciona CSS a DOM injetando tag
                'css-loader', //interpreta @import, url()
                'sass-loader'
            ]

        },{
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
            
    }
}
*/