var arr=[];
arr[0]={
    Q:'Paris là thủ đô nước nào ',
    A1:'Pháp',
    A2:'Mỹ',
    A3:'Đức',
    A4:'Nhật Bản'
};

arr[1] = {
    Q: 'Việt Nam có bao nhiêu dân tộc?',
    A1: '54',
    A2: '64',
    A3: '55',
    A4: '44'
};
arr[2] = {
    Q: 'Chó có bao nhiêu chân?',
    A1: '1',
    A2: '2',
    A3: '3',
    A4: '4'
};
arr[3] = {
    Q: 'SeaGame của khu vực nào',
    A1: 'Đông Nam Á',
    A2: 'EU',
    A3: 'Mỹ La tinh',
    A4: 'Bắc Âu'
};

for(var i=0; i<arr.length;i++){
    document.getElementById('question').innerHTML = arr[i].Q;
    document.getElementsByClassName('ans_span')[0].innerHTML = arr[i].A1;
    document.getElementsByClassName('ans_span')[1].innerHTML = arr[i].A2;
    document.getElementsByClassName('ans_span')[2].innerHTML = arr[i].A3;
    document.getElementsByClassName('ans_span')[3].innerHTML = arr[i].A4;
    
    if (document.getElementsByClassName('ans')[0].checked == true) {
        alert('I am ok')
    }

}
