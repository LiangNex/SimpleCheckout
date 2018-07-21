/**
 * Register express configuration with babel to enable ES6
 * @author suliang
 * @date 2018/7/19
 */

require('babel-register')({
	presets: [ 'env' ]
});

module.exports = require('./app');

