// $(document).ready(function);
$(".dropdown-trigger").dropdown({ hover: false });

/**
 * if offsetTop of .aside > offsetTop of main-content: aside will have 
 * an addition class: hide with property: display:none!important;
 */

window.onscroll = function () { myFunction() };

var asideBar = document.getElementById("asideBar");
var topOfAsideBar = asideBar.offsetTop;


function myFunction() {
    console.log('asideBar: ' + topOfAsideBar);
    console.log('windows: '+ window.pageYOffset);
    if (window.pageYOffset >= 950) {
        asideBar.classList.add("sticky");
    } else {
        asideBar.classList.remove("sticky");
    }
}
