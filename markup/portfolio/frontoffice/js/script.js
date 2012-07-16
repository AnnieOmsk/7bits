//$(document).delegate('#opendialog', 'click', function() {
// $('<div>').simpledialog2({
// mode: 'blank',
// headerText: 'Some Stuff',
// headerClose: true,
// blankContent :
// "<ul data-role='listview'><li>Some</li><li>List</li><li>Items</li></ul>"+
//
// "<a rel='close' data-role='button' href='#'>Close</a>"
// })
//})
//
$(function(){
    $("#document-number").mask("?9999 999999");
    $("#inn").mask("?9999999999");
    $("#date-birth").mask("?99.99.9999");
});

//$(function(){
// $('input[placeholder], textarea[placeholder]').placeholder();
//});