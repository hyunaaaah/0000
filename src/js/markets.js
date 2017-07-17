require('bootstrap');
require('../less/markets.less');

require('./common');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var marketId = params.get('id');

//market-sub-menu tab기능 js
var callback = [];

$('.market-sub-list > li').on('click', function () {
    if ($(this).hasClass('active')) {
        return;
    }

    var tabIndex = $(this).index();

    var tabBtns = $(this).parent('.market-sub-list').find('li');
    tabBtns.removeClass('active');
    $(tabBtns[tabIndex]).addClass('active');

    var tabContents = $(this).parents('.market-contents-area').find('.tab-market-introdce');
    tabContents.removeClass('active');
    $(tabContents[tabIndex]).addClass('active');

    if (typeof callback[tabIndex] === 'function') {
        callback[tabIndex]();
    }
});

module.exports = {
    setCallback: function (tabIndex, handler) {
        callback[tabIndex] = handler;
    }
};
