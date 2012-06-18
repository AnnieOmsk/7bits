$(function(){
    $('#offer-link').click(function() {
        $(this).parent().find('.like-box').toggleClass('visibility');

        return false;
    });
});