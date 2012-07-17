$(document).bind("pageshow", function(){

    setTimeout(function(){
        $('#loading-msg').fadeOut(250, function(){
            $(this).remove();
        })
    }, 0);
});