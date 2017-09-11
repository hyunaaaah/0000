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

            console.log(mapContents);

            break;
    }
}
initContents();
