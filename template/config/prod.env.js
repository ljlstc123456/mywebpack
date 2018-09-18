'use strict'
const config = require('../configApi.js')
let HOST = process.argv.splice(2)[0] || 'production';
module.exports = {
  NODE_ENV: '"production"',
  HOST: '"'+HOST+'"',
  baseURL:'"'+config[HOST].baseURL+'"'
}
