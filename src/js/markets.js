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
        case 'marketMI':
        case 'marketQnA':
                var MIcontents = require('../template/markets/marketMI.hbs');
                var charContents = require('../template/markets/marketQnA.hbs');

                $('.market-contents').empty();
                if (marketId === 'marketMI') {
                    $('.market-contents').append(MIcontents);
                }
                else {
                    $('.market-contents').append(charContents);
                }
            break;
        case 'marketIntroduce':
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