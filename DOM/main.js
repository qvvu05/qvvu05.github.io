function changeFontSize(x){

    var p=document.getElementsByClassName('box');
    // var p = document.getElementsByTagName('p');
    for(var i=0; i< p.length;i++){
        p[i].style.fontSize = x.toString() + "px";
    }
}
//TestCase
changeFontSize(40)

function increaseFontSize(para){
    var fs=document.getElementsByClassName(para).style.fontSize;
}