

// setQues[0] = makeQuestion('Paris là thủ đô nước nào?', 'Pháp', 'Mỹ', 'Đức', 'Nhật Bản','Pháp');
// setQues[1] = makeQuestion('Việt Nam có bao nhiêu dân tộc?', '54', '64', '55', '44', '54');
// setQues[2] = makeQuestion('Chó có bao nhiêu chân?', '1', '2', '3', '4', '4');
// setQues[3] = makeQuestion('SeaGame của khu vực nào', 'Đông Nam Á', 'EU', 'Mỹ La tinh', 'Bắc Âu', 'Đông Nam Á');

var setQues=[];
var mark = 0;
var ques = 0;

setQues[0]= {
    question:'Paris là thủ đô nước nào?',
    a: 'Pháp',
    b:'Mỹ', 
    c:'Đức', 
    d:'Nhật Bản', 
    ans:'Pháp'
};
setQues[1]={
    question: 'Việt Nam có bao nhiêu dân tộc?', 
    a:'54', 
    b:'64', 
    c:'55', 
    d:'44', 
    ans:'54'
};

setQues[2]= {
    question:'Chó có bao nhiêu chân?', 
    a:'1', 
    b:'2',
    c:'3',
    d: '4', 
    ans:'4'
};
setQues[3] = {
    question:'SeaGame của khu vực nào', 
    a:'Đông Nam Á', 
    b:'EU',
    c: 'Mỹ La tinh',
    d: 'Bắc Âu',
    ans: 'Đông Nam Á'
};


function makeQuestion(i) {
    document.getElementById('question').innerText = setQues[i].question
    document.getElementById('ansA').innerText = setQues[i].a
    document.getElementById('ansB').innerText = setQues[i].b
    document.getElementById('ansC').innerText = setQues[i].c
    document.getElementById('ansD').innerText = setQues[i].d
}


function count(ans){
    if (ans==setQues[0].ans) {
        
        mark++;
        alert('your mark: '+mark);
    }
    else{
        alert('your mark: ' + mark);
    }
    
    if(ques<setQues.length){
        ques = ques + 1;
        alert('ques inside count function: ' + ques);
        makeQuestion(ques);
    }
}

alert('global ques: ' + ques);

makeQuestion(ques);