var data=[
    {type:"name", content:"Hao"},
    { type: "birthday", content: "01/01/1990" },
    { type: "name", content: "Hao" },
    { type: "name", content: "Hao" },
];

var i;
var count=data.length;
var row;
var rowElement=[];
for(i=0; i<count;++i){
    row=data[i];
    $('#my-table').append(console.log($('<tr></tr>'))
        // $('<tr></tr>').append(
        //     $('<td></td>').html(row.type),
        //     $('<td></td>').html(row.content)
        // )
    );
}
