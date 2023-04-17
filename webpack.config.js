const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const pages = {
  contacts: "contacts",
  reg_volunteer: "reg_volunteer",
  reg_create_account: "reg_create_account",
  reg_email_info: "reg-email_info",
  social: "social",
  competitions: "competitions",
  motivation: "motivation",
  notifications: "notifications",
  password: "password",
  portfolio: "portfolio",
  profile: "profile"
}

const currentPage = pages.contacts

module.exports = {
  entry: {
    main: `./src/pages/${ currentPage }/index.js`
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: '',
  },
  mode: 'development',
  devServer: {
    static: path.resolve(__dirname, './dist'),
    open: true,
    compress: true,
    port: 8080
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: 'babel-loader',
      exclude: '/node_modules/'
    },
    {
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource',
    },
    {
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, {
        loader: 'css-loader',
        options: {
          importLoaders: 1
        }
      },
        'postcss-loader'
      ]
    },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
       template: `src/pages/${ currentPage }/index.html`
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
  ]
}
