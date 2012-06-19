$(document).delegate('.wait', 'vclick', function() {
    $('<div>').simpledialog2({
        mode: 'blank',
        headerText: 'Статус',
        headerClose: true,
        blankContent :
            "<p class='dialog-message'>Данный раздел находится в разработке.</p>"
                + "<a rel='close' data-role='button' href='#'>Закрыть</a>"
    });
});