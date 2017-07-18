require('bootstrap');
require('../less/markets.less');

require('./common');
require('./market-tab');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var marketId = params.get('id');
