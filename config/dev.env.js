var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT:'"10.32.212.22/Dashboard_API/servlet"'//姜叶群
})
