'use strict'
const config = require('../configApi.js')
let HOST = JSON.parse(process.env.npm_config_argv).remain[0] || 'production';
module.exports = {
  NODE_ENV: '"production"',
  HOST: '"'+HOST+'"',
  baseURL:'"'+config[HOST].baseURL+'"'
}
