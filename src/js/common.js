$('.header-menu > li').on('mouseover', function () {
    var subMenu = $(this).find('.header-sub-menu');

    subMenu.show();
});

$('.header-menu > li').on('mouseout',function () {
    $(this).find('.header-sub-menu').hide();
});