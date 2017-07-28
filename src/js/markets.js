require('bootstrap');
require('../less/markets.less');
require('../less/common.less');

require('./common');
require('./market-tab');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var marketId = params.get('id');

var introContents = require('./markets/' + marketId);

$('.markets-headline').css('background-color', introContents[0].backgroundColor );

function initheadline() {
    var headlineTemplate = require('../template/markets/headline.hbs');
    $('.markets-headline').empty();

    for (var i = 0; i < introContents.length; i++) {
        var headlneHtml = headlineTemplate(introContents[i]);

        $('.markets-headline').append(headlneHtml);
    }
}

initheadline();

function initContents() {
    switch (marketId) {
        case 'marketIntroduce':
        case 'yydIntroduce':
        case 'ddpIntroduce':
        case 'cgcIntroduce':
        case 'banpoIntroduce':
        case 'cggjIntroduce':
        case 'marketMI':
        case 'marketQnA':
            var template = require('../template/markets/introduce.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < introContents.length; i++) {
                var contentsHtml = template(introContents[i]);

                $('.market-contents').append(contentsHtml);
            }
            break;
        case 'yydMarket':
        //case 'ddpMarket':
      //  case 'cgcMarket':
            var foods = require('./markets/' + marketId);
            var template = require('../template/markets/market-food.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < foods.length; i++) {
                var contentsHtml = template(foods[i]);

                $('.market-contents').append(contentsHtml);
            }
            break;
    }
}
initContents();