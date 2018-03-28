var setQues = [];
var mark = 0;

setQues[0] = {
    question: 'Paris là thủ đô nước nào?',
    a: 'Pháp',
    b: 'Mỹ',
    c: 'Đức',
    d: 'Nhật Bản',
    ans: 'Pháp'
};

setQues[1] = {
    question: 'Việt Nam có bao nhiêu dân tộc?',
    a: '54',
    b: '64',
    c: '55',
    d: '44',
    ans: '54'
};

setQues[2] = {
    question: 'Chó có bao nhiêu chân?',
    a: '1',
    b: '2',
    c: '3',
    d: '4',
    ans: '4'
};

setQues[3] = {
    question: 'SeaGame của khu vực nào',
    a: 'Đông Nam Á',
    b: 'EU',
    c: 'Mỹ La tinh',
    d: 'Bắc Âu',
    ans: 'Đông Nam Á'
};

setQues[4] = {
    question: 'Ai là người đẹp trai nhất ở TechMaster?',
    a: 'Quyền',
    b: 'Hào',
    c: 'Trung',
    d: 'Cường',
    ans: 'Quyền'
};


function makeQuestion(idx) {
    document.getElementById('question').innerHTML = setQues[idx].question;
    document.getElementById('ansA').innerHTML = setQues[idx].a;
    document.getElementById('ansB').innerHTML = setQues[idx].b;
    document.getElementById('ansC').innerHTML = setQues[idx].c;
    document.getElementById('ansD').innerHTML = setQues[idx].d;
    document.getElementById('indexofques').innerHTML = 'Question: '+ (idx+1);
}


function count(val) {

    if (val == setQues[num].ans) {
        mark++;
    }

    num++;
    // alert(num);
    if (num == (setQues.length) ) {
        alert('Your Score: '+mark);
        // if(mark==setQues.length)
        {
            location.assign("congrat.html");
        }
    }
    makeQuestion(num);
}

var num = 0;
makeQuestion(num);
var theme=1;

function changetheme(){
    if(theme==1){
        $('.ans').css('background-color', 'green');
        $('.ans').css('font-size', '2em');
        $('.ans').css('color', 'blue');
        $('#question').css('padding-top', '10px');
        $('#question').css('padding-bottom', '10px');
        theme=2;
    }
    else if(theme==2){
        $('.ans').css('background-color', 'white');
        $('.ans').css('font-size', '2em');
        $('.ans').css('color', 'red');
        $('#question').css('padding-top', '10px');
        $('#question').css('padding-bottom', '10px');
        theme=3;
    }

    else {
        $('.ans').css('background-color', 'yellow');
        $('.ans').css('font-size', '2em');
        $('.ans').css('color', 'blue');
        $('#question').css('padding-top', '10px');
        $('#question').css('padding-bottom', '10px');
        theme = 1;
    }

}