const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin= require('mini-css-extract-plugin')

module.exports= {

entry:{
  app: ["@babel/polyfill",

'./src/app/index.js']},

output:{
    path: path.resolve(__dirname,'build'),
    filename: 'js/bundle.js'
},

devServer: {
    port: 4000,
    open: true, 
  },

  module: {
    rules: [

      {test: /\.js/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/i,
        //Reemplazamos el style-loader por ---> Configuracion de extraccion del css a parte 
        use: [ MiniCssExtractPlugin.loader,
         'css-loader'],
      },
    ],
  },

plugins:[
     
    new HtmlWebpackPlugin({
        template: './src/index.html',
        manify:                       //propiedad para comprimir el codigo de html
        {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
          }
    }),
  
    new MiniCssExtractPlugin({
   //Archivo de Salida del css   
      filename: 'css/bundle.css'
    })
    
]


 }