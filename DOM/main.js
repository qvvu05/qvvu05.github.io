
function changeFontSize(x){
    /**
     * Bai 1: function changeFontSize(x): 
     * Thay đổi kích thước font chữ của cả 3 đoạn văn thành x pixels.
     */
    var p=document.getElementsByClassName('box');
    for(var i=0; i< p.length;i++){
        p[i].style.fontSize = x.toString() + "px";
    }
}
//TestCase
// changeFontSize(40)

function increaseFontSize(para){
    /**
     * Bai tap 2
     * function increaseFontSize(paragraph): 
     * Tăng kích thước font chữ của đoạn văn mong muốn (paragraph) lên 1 pixel so với kích thước hiện tại, 
     * kích thước tăng lên không được vượt quá 30 pixels 
     * (Sử dụng sau khi gọi hàm changeFontSize()).
     */
    var fs=document.getElementsByClassName(para)[0].style.fontSize;
    fs=fs.slice(0,-2); //remove 'px'
    if(parseFloat(fs)>29){
        //set fontsize=30px 
        document.getElementsByClassName(para)[0].style.fontSize = '30px';
    }
    else{
        //if fontsize smaller or equal 29px; increase by 1
        //increase font size by 1 and then add string: 'px', result will be automatically converted into string stype
        document.getElementsByClassName(para)[0].style.fontSize = (parseFloat(fs) + 1) + 'px';
    }//end of if-else
    
}
//testCase BT2
// increaseFontSize('p1')
// increaseFontSize('p2')
// increaseFontSize('p3')


function decreaseFontSize(para) {
    /**
     * Bai tap 3
     * function decreaseFontSize(paragraph): 
     * (Sử dụng sau khi gọi hàm changeFontSize()).
     */
    var fs = document.getElementsByClassName(para)[0].style.fontSize;
    fs = fs.slice(0, -2); //remove 'px'
    if (parseFloat(fs) < 11) {
        //set fontsize=10px 
        document.getElementsByClassName(para)[0].style.fontSize = '10px';
    }
    else {
        //decrease font size by 1 and then add string: 'px', result will be automatically converted into string stype
        document.getElementsByClassName(para)[0].style.fontSize = (parseFloat(fs) - 1) + 'px';
    }

}
//testCase BT3
// decreaseFontSize('p1')
// decreaseFontSize('p2')
// decreaseFontSize('p3')

/** BT4
 * function changeColor(): Đổi màu chữ của 3 đoạn văn theo thứ tự xanh, vàng, đỏ.
 */
function changeColor(){
    document.getElementsByClassName('box')[0].style.color='blue';
    document.getElementsByClassName('box')[1].style.color = 'yellow';
    document.getElementsByClassName('box')[2].style.color = 'red';
}

//TestCase BT4
// changeColor()

/**BT 5
 * function changeBgColor(color): Thay đổi màu nền của trang thành màu color.
 */
function changeBgColor(color){
    document.getElementsByTagName('html')[0].style.backgroundColor=color;
}
//TestCase BT5
// changeBgColor('green')

/** BT6
 * function copyContent(paragraph1, paragraph2): 
 * Thay đổi nội dung của đoạn văn paragraph1 thành giống nội dung 
 * của đoạn văn paragraph2.
 */
function copyContent(para1, para2){
    document.getElementsByClassName(para1)[0].innerHTML=document.getElementsByClassName(para2)[0].innerHTML;
}

//TestCase BT6
// copyContent('p1', 'p2')