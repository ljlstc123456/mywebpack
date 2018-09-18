'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const config = require('../configApi.js')
module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  HOST: '"dev"',
  baseURL:'"'+config['dev'].baseURL+'"'
})
