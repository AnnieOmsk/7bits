$(function() {
    $.fn.fixedMenu = function() {
        return this.each(function() {

            var linkClicked = false;
            var menu = $(this);

            $('body').bind('vclick', function() {

                if (menu.find('.active').size() > 0 && !linkClicked) {
                    menu.find('.active').removeClass('active');
                } else {
                    linkClicked = false;
                }
            });

            menu.find('.logo-small > a').bind('vclick', function() {

                linkClicked = true;

                if ($(this).parent().hasClass('active')) {
                    $(this).parent().removeClass('active');
                } else {
                    $(this).parent().parent().find('.active').removeClass('active');
                    $(this).parent().addClass('active');
                }
            });
        });
    }
});
