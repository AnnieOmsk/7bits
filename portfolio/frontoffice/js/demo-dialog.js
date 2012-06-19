$(document).delegate('.demo', 'vclick', function() {
    $('<div>').simpledialog2({
        mode: 'blank',
        headerText: 'Notice',
        headerClose: true,
        blankContent :
            "<p class='dialog-message'>It's just a demo page.</p>"
                + "<a rel='close' data-role='button' href='#'>Закрыть</a>"
    });
});

var initServerDialogInfo = function(){
    $('<div>').simpledialog2({
        mode: 'blank',
        headerText: 'Notice',
        headerClose: true,
        blankContent :
            "<p class='dialog-message'>To demonstrate this functionality must be connected to the server.</p>"
                + "<a rel='close' data-role='button' href='#'>Закрыть</a>"
    });
}

$('.filter-group input').live('change', function() {
    initServerDialogInfo();
})

$('.search-right-filter a').live('click', function() {
    initServerDialogInfo();
})