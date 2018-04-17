var app={
    /**adding jobs, args:  */
    newJob:function (type,input) {
        let event=window.event;
        let jobName=$('input').val();

        if (event.keyCode===13 && jobName.trim()!=='') {
            //add new job
            this.addJobToList(type,jobName);
            //reset input for user can adding anotherjob
            $('input').val('');
        }
    },

    addJobToList: function (type, jobName){
        var content = '<a href="#!" class="collection-item">'+ jobName + '</a >'
        $('#'+type).append(content);
    }

}



// sort inside each col-jqueryui-sortable()
$(function () {
    $(".connectedSortable").sortable({
        connectWith: ".connectedSortable"
    }); // .disableSelection()
});