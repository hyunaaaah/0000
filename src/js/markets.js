require('bootstrap');
require('../less/markets.less');
require('../less/market-intro.less');
require('../less/common.less');

require('./common');
require('./market-tab');
require('./headline');

var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var marketId = params.get('id');

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
            var introContents = require('./markets/introduce/' + marketId);

            var template = require('../template/markets/introduce.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < introContents.length; i++) {
                var contentsHtml = template(introContents[i]);

                $('.market-contents').append(contentsHtml);
            }

            break;

        case 'yydMarket':
        case 'ddpMarket':
        case 'cgcMarket':
        case 'banpoMarket':
        case 'cggjMarket':

            var template = require('../template/markets/marketDetail.hbs');
            $('.market-contents').append(template);
            break;

        case 'yydMap':
        case 'ddpMap':
        case 'cgcMap':
        case 'banpoMap':
        case 'cggjMap':
            var mapContents = require('./markets/map/' + marketId);

            var template = require('../template/markets/map.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < mapContents.length; i++) {
                var contentsHtml = template(mapContents[i]);

                $('.market-contents').append(contentsHtml);
            }
            break;

        case 'yydNotice':
        case 'ddpNotice':
        case 'cgcNotice':
        case 'cggjNotice':
        case 'banpoNotice':
        case 'marketNotice':
            /*
            var noticeContents = require('./markets/notice/' + marketId);

            var template = require('../template/markets/map.hbs');
            $('.market-contents').empty();

            for (var i = 0; i < noticeContents.length; i++) {
                var contentsHtml = template(noticeContents[i]);

                $('.market-contents').append(contentsHtml);
            }
            */


            var template = require('../template/markets/notice.hbs');
            $('.market-contents').append(template);
            break;
        case 'yydSketch':
        case 'ddpSketch':
        case 'cgcSketch':
        case 'banpoSketch':
        case 'cggjSketch':
        case 'marketSketch':

            var template = require('../template/markets/sketch.hbs');
            $('.market-contents').append(template);
            break;

        case 'yydConcert':
        case 'ddpConcert':
        case 'cgcConcert':
        case 'banpoConcert':
        case 'cggjConcert':

            var template = require('../template/markets/concert.hbs');
            $('.market-contents').append(template);
            break;

        case 'marketPress':
            var template = require('../template/markets/marketPress.hbs');
            $('.market-contents').append(template);
            break;
        case 'marketMedia':
            var template = require('../template/markets/marketMedia.hbs');
            $('.market-contents').append(template);
            break;
    }
}
initContents();
