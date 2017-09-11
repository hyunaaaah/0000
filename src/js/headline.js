var URLSearchParams = require('url-search-params');
var params = new URLSearchParams(location.search);
var marketId = params.get('id');

function initHeadline() {
    $('.markets-headline').empty();

    switch (marketId) {
        case 'marketIntroduce':
        case 'marketMI':
        case 'marketQnA':
            var headlineContents = require('./markets/headline/commonMarket');

            $('.markets-headline').css('background-color', headlineContents[0].backgroundColor );
            $('.market-image').css('background-image', 'url(' + headlineContents[0].backgroundImage +')');


            var headlineTemplate = require('../template/markets/headline.hbs');

            for (var i = 0; i < headlineContents.length; i++) {
                var headlineHtml = headlineTemplate(headlineContents[i]);

                $('.markets-headline').append(headlineHtml);
            }
            break;
        case 'yydIntroduce':
        case 'yydMarket':
        case 'yydConcert':
        case 'yydSketch':
        case 'yydNotice':
        case 'yydMap':

            var headlineContents = require('./markets/headline/yyd');

            $('.markets-headline').css('background-color', headlineContents[0].backgroundColor );
            $('.market-image').css('background-image', 'url(' + headlineContents[0].backgroundImage +')');


            var headlineTemplate = require('../template/markets/headline.hbs');

            for (var i = 0; i < headlineContents.length; i++) {
                var headlineHtml = headlineTemplate(headlineContents[i]);

                $('.markets-headline').append(headlineHtml);
            }
            break;

        case 'ddpIntroduce':
        case 'ddpMarket':
        case 'ddpConcert':
        case 'ddpSketch':
        case 'ddpNotice':
        case 'ddpMap':
            var headlineContents = require('./markets/headline/ddp');

            $('.markets-headline').css('background-color', headlineContents[0].backgroundColor );
            $('.market-image').css('background-image', 'url(' + headlineContents[0].backgroundImage +')');


            var headlineTemplate = require('../template/markets/headline.hbs');

            for (var i = 0; i < headlineContents.length; i++) {
                var headlineHtml = headlineTemplate(headlineContents[i]);

                $('.markets-headline').append(headlineHtml);
            }
            break;

        case 'cgcIntroduce':
        case 'cgcMarket':
        case 'cgcConcert':
        case 'cgcSketch':
        case 'cgcNotice':
        case 'cgcMap':
            var headlineContents = require('./markets/headline/cgc');

            $('.markets-headline').css('background-color', headlineContents[0].backgroundColor );
            $('.market-image').css('background-image', 'url(' + headlineContents[0].backgroundImage +')');


            var headlineTemplate = require('../template/markets/headline.hbs');

            for (var i = 0; i < headlineContents.length; i++) {
                var headlineHtml = headlineTemplate(headlineContents[i]);

                $('.markets-headline').append(headlineHtml);
            }
            break;

        case 'banpoIntroduce':
        case 'banpoMarket':
        case 'banpoConcert':
        case 'banpoSketch':
        case 'banpoNotice':
        case 'banpoMap':
            var headlineContents = require('./markets/headline/banpo');

            $('.markets-headline').css('background-color', headlineContents[0].backgroundColor );
            $('.market-image').css('background-image', 'url(' + headlineContents[0].backgroundImage +')');


            var headlineTemplate = require('../template/markets/headline.hbs');

            for (var i = 0; i < headlineContents.length; i++) {
                var headlineHtml = headlineTemplate(headlineContents[i]);

                $('.markets-headline').append(headlineHtml);
            }
            break;

        case 'cggjIntroduce':
        case 'cggjMarket':
        case 'cggjConcert':
        case 'cggjSketch':
        case 'cggjNotice':
        case 'cggjMap':
            var headlineContents = require('./markets/headline/cggj');

            $('.markets-headline').css('background-color', headlineContents[0].backgroundColor );
            $('.market-image').css('background-image', 'url(' + headlineContents[0].backgroundImage +')');


            var headlineTemplate = require('../template/markets/headline.hbs');

            for (var i = 0; i < headlineContents.length; i++) {
                var headlineHtml = headlineTemplate(headlineContents[i]);

                $('.markets-headline').append(headlineHtml);
            }
            break;




    }


}
initHeadline();