// sort inside each col-jqueryui-sortable()
$(function () {
    $(".connectedSortable").sortable({
        connectWith: ".connectedSortable"
    }); // .disableSelection()
});