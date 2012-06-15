$(function(){
    $('#offer-link').click(function() {
        $(this).parent().find('.like-box').slideToggle(200);
        return false;
    });
});