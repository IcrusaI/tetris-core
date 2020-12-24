// this module has all basic logic used by all configurations
const webpack = require('webpack');
const _ = require('lodash');
const path = require('path');
const resolveTsconfigPathsToAlias = require("../resolve-tsconfig-path-to-webpack-alias");

/**
 *
 * @param {webpack.Configuration} mergeWith
 * @returns {webpack.Configuration}
 */
function createConfiguration(mergeWith = undefined) {
  /**
   * @type {webpack.Configuration}
   */
  let res = {
    module: {
      rules: [{
        test: /(\.tsx|\.ts)$/,
        loaders: ['babel-loader', 'ts-loader'],
        exclude: /(node_modules|bower_components)/
      },
        {
          test: /(\.jsx|\.js)$/,
          loader: 'babel-loader',
          exclude: /(node_modules|bower_components)/
        },
        {
          test: /(\.jsx|\.js)$/,
          loader: 'eslint-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      modules: [path.resolve('node_modules'), path.resolve('src')],
      extensions: ['.json', '.js', '.jsx', '.ts', '.tsx'],
      alias: {
        'utils': path.resolve(__dirname, '../src/utils'),
        ...resolveTsconfigPathsToAlias({
          tsconfigPath: './tsconfig',
          webpackConfigBasePath: './',
        })
      },
    },
  };
  if (mergeWith)
    res = _.merge(res, mergeWith);
  return res;
}

module.exports.createConfiguration = createConfiguration;
