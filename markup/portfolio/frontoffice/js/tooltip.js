$('.find-form .error-field input').focus(function() {       
    $(this).parent().append(
        '<div class="tooltip"><div class="tooltip-wrapper"><span class="corner"></span>' 
            + $(this).attr('data-tooltip') 
            + '</div></div>');
    }
);

$('.find-form span.error').click(function() {
        $(this).parent().find('input').trigger('focus'); 
    }
);

$('.find-form .error-field input').blur(function() {
     $('.tooltip').remove();
    }
);