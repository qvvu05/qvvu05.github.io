var data = [
    {
        picture: "<img src='img/SonGoku.jpg'></img>",
        name: 'Son Goku',
        gender: 'male',
        email: 'anhanhsuotbophim@123.com',
        phone: 1
    },
    {
        picture: "<img src='img/Bulma.jpg'></img>",
        name: 'Bulma',
        gender: 'female',
        email: 'kieunusexy@123.com',
        phone: 2
    },
    {
        picture: "<img src='img/Kame.jpg'></img>",
        name: 'Quy lão Kame',
        gender: 'male',
        email: 'thichgaidep@gmail.com',
        phone: 3
    },
    {
        picture: "<img src='img/zamas.jpg'></img>",
        name: 'Zamas tương lai',
        gender: 'other',
        email: 'fakegoku@gmail.com',
        phone: 4
    },
    {
        picture: "<img src='img/beerus.jpg'></img>",
        name: 'Beerus Sama',
        gender: 'male',
        email: 'sieunhatvutru@123.com',
        phone: 3
    },
    {
        picture: "<img src='img/vegeta.jpg'></img>",
        name: 'Vegeta',
        gender: 'male',
        email: 'deptrainhathanhtinh@123.com',
        phone: 3
    },
    {
        picture: "<img src='img/number18.jpg'></img>",
        name: '18',
        gender: 'male',
        email: 'sexy@gmail.com',
        phone: 3
    },
];

/**
 * this code will look at current direction of sort and inverse it
 */
var nameDirection = 1;
var genderDirection = 1;
var emailDirection = 1;
var phoneDirection = 1;

var property;
var newData = [];
function getVal(btn) {
    property = btn.value;
    // alert(btn.value);
    switch (property) {
        case 'Name': {

            if (nameDirection == 1) { newData = data.sort(function (a, b) { return (a.name > b.name) }); break; } else { newData = data.sort(function (a, b) { return (a.name < b.name) }); break; }
        }

        case 'Gender': {
            if (genderDirection == 1) { newData = data.sort(function (a, b) { return (a.gender > b.gender) }); break; } else { newData = data.sort(function (a, b) { return (a.gender < b.gender) }); break; }
        }
        case 'Email': {
            if (emailDirection == 1) { newData = data.sort(function (a, b) { return (a.email > b.email) }); break; } else { newData = data.sort(function (a, b) { return (a.email < b.email) }); break; }
        }
        case 'Phone': {
            if (phoneDirection == 1) { newData = data.sort(function (a, b) { return (a.phone > b.phone) }); break; } else { newData = data.sort(function (a, b) { return (a.phone < b.phone) }); break; }
        }
        default:
            break;
    }

}

function showData() {
    $('tbody').html('');//reset data
    for (var i = 0; i < newData.length; i++) {
        $('tbody').append('<tr><td>' + newData[i].picture + '</td><td>' +
            newData[i].name + '</td><td>' + newData[i].gender +
            '</td><td>' + newData[i].email + '</td><td>' + newData[i].phone + '</td></tr>');
    }
}

//start the program: show the original data
for (var i = 0; i < data.length; i++) {
    $('tbody').append('<tr><td>' + data[i].picture + '</td><td>' +
        data[i].name + '</td><td>' + data[i].gender +
        '</td><td>' + data[i].email + '</td><td>' + data[i].phone + '</td></tr>');
} 
