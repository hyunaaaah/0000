require('bootstrap');
require('../less/markets.less');
require('../less/market-intro.less');
require('../less/common.less');

require('./common');
require('./market-tab');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var marketId = params.get('id');

var introContents = require('./markets/introduce/' + marketId);

$('.markets-headline').css('background-color', introContents[0].backgroundColor );
$('.market-image').css('background-image', 'url(' + introContents[0].backgroundImage +')');

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
        case 'marketMI':
        case 'marketQnA':
        case 'yydIntroduce':
        case 'ddpIntroduce':
        case 'cgcIntroduce':
        case 'banpoIntroduce':
        case 'cggjIntroduce':

            var template = require('../template/markets/introduce.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < introContents.length; i++) {
                var contentsHtml = template(introContents[i]);

                $('.market-contents').append(contentsHtml);
            }

            if (marketId === 'marketMI' || 'marketQnA') {
                var contents = require('../template/markets/marketMI.hbs');
                $('.market-contents').empty();
                $('.market-contents').append(contents);
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