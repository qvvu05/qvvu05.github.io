var data=[
    {
        picture: "<img src='img/p1.png'></img>",
        name: 'Ann',
        gender: 'male',
        email: 'abc@123.com',
        phone: 1
    },
    {
        picture: "<img src='img/p1.png'></img>",
        name: 'Charlie',
        gender: 'female',
        email: 'abc@123.com',
        phone: 2
    },
    {
        picture: "<img src='img/p1.png'></img>",
        name: 'Bob',
        gender: 'male',
        email: 'abc@123.com',
        phone: 3
    },
    {
        picture: "<img src='img/p1.png'></img>",
        name: 'Alex',
        gender: 'male',
        email: 'abc@123.com',
        phone: 4
    }
];

/**
 * sort before show data
 * click-> getvalue to be sort
 * sort
 * show data
 */


/************************************************************************** */
function dynamicSort(property){
    return function(a,b) {
        return a[property]>b[property];
    }
}
//get property here and pass into dynamicSort
var newData=data.sort(dynamicSort(''));
// var newData=data.sort(function(a,b){return a.name>b.name});

/************************************************************************** */

for(var i=0; i< data.length;i++){
    // $('tbody').append('<tr><td>' + data[i].picture + '</td><td>' +
    //     data[i].name + '</td><td>' + data[i].gender +
    //     '</td><td>' + data[i].email + '</td><td>' + data[i].phone + '</td></tr>');
    
    $('tbody').append('<tr><td>' + newData[i].picture + '</td><td>' +
        newData[i].name + '</td><td>' + newData[i].gender +
        '</td><td>' + newData[i].email + '</td><td>' + newData[i].phone + '</td></tr>');

}

