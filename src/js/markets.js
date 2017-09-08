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

function initHeadline() {
    $('.markets-headline').empty();

    var headlineTemplate = require('../template/markets/headline.hbs');

    for (var i = 0; i < introContents.length; i++) {
        var headlineHtml = headlineTemplate(introContents[i]);

        $('.markets-headline').append(headlineHtml);
    }

}
initHeadline();

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

            var template = require('../template/markets/market-food.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < introContents.length; i++) {
                var contentsHtml = template(introContents[i]);

                $('.market-contents').append(contentsHtml);

            }
            break;

        case 'yydConcert':
        case 'ddpConcert':
        case 'banpoConcert':
            var template = require('../template/markets/market-concert.hbs');

            $('.market-contents').empty();

            for (var i = 0; i < introContents.length; i++) {
                var contentsHtml = template(introContents[i]);

                $('.market-contents').append(contentsHtml);

            }
            break;

        case 'cggjConcert':
            alert('준비중입니다.');
            break;
    }
}
initContents();