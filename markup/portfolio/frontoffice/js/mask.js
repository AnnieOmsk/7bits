$(document).bind("pageshow", function(){
    setTimeout(function(){
        $("#kpp").mask("?999999999");
        $("#inn").mask("?9999999999");
        $("#ogrn").mask("?999999999999");
        $("#okpo").mask("?99999999");
    }, 300);
})