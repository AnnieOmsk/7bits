$('.nav-link-logout').live('vclick', function() {

    window.location = url('/logout');
    return false;
});

$('.nav-link-search').live('vclick', function() {

    window.location = url();
    return false;
});

$('.logout').live('click', function() {

    window.location = url($(this).attr('href'));
    return false;
});