require('bootstrap');
require('../less/main.less');

require('./common');
require('./market-carousel');

var model = {
    images: [
        '../img/market/market1.jpg',
        '../img/market/market2.jpg',
        '../img/market/market3.jpg',
        '../img/market/market4.jpg'
    ]
};

function initActivity(model) {
    carousel.init($('.market-carousel'),
        model.images,
        function (slide) {
            var slideElement = $('<li></li>');
            slideElement.css('background-image', 'url(' + slide + ')');

            return slideElement;
        }, {
            slideDuration: 1000,
            slideInterval: 5000
        });
}

initActivity(model);