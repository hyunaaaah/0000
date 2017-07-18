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

    var tabContents = $(this).parents('.main').find('.market-contents-area > li');
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
