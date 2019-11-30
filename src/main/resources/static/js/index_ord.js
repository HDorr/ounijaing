// function showTime(){
//     nowtime=new Date();
//     year=nowtime.getFullYear();
//     month=nowtime.getMonth()+1;
//     date=nowtime.getDate();
//     hours=nowtime.getHours();
//     min=nowtime.getMinutes();
//     sec=nowtime.getSeconds();
//     day=nowtime.getDay();
//     document.getElementById("mytime").innerText=year+"年"+month+"月"+date+"日 "+hours+":"+min+":"+sec+" 星期"+day;
// }

setInterval("showTime()",1000);


function userSelect() {
    document.getElementById('ifm').src="touserSelect_ord";
    $("#ifm").load();
}


function departmentSelect() {
    document.getElementById('ifm').src="todepartmentSelect_ord";
    $("#ifm").load();
}



function jobSelect() {
    document.getElementById('ifm').src="tojobSelect_ord";
    $("#ifm").load();
}

function staffSelect() {
    document.getElementById('ifm').src="tostaffSelect_ord";
    $("#ifm").load();
}

function noticeSelect() {
    document.getElementById('ifm').src="tonoticeSelect_ord";
    $("#ifm").load();
}


function documentSelect() {
    document.getElementById('ifm').src="todocumentSelect_ord";
    $("#ifm").load();
}

function uploadDocument() {
    document.getElementById('ifm').src="touploadDocument_ord";
    $("#ifm").load();
}




function onmouseover1() {
    var b = document.getElementById('btn1');
    b.onmousemove = function () {
        b.style.backgroundColor = 'yellowgreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover11() {
    var b = document.getElementById('btn11');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}


function onmouseover2() {
    var b = document.getElementById('btn2');
    b.onmousemove = function () {
        b.style.backgroundColor = 'yellowgreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover21() {
    var b = document.getElementById('btn21');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover3() {
    var b = document.getElementById('btn3');
    b.onmousemove = function () {
        b.style.backgroundColor = 'yellowgreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}


function onmouseover31() {
    var b = document.getElementById('btn31');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover4() {
    var b = document.getElementById('btn4');
    b.onmousemove = function () {
        b.style.backgroundColor = 'yellowgreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover41() {
    var b = document.getElementById('btn41');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}


function onmouseover5() {
    var b = document.getElementById('btn5');
    b.onmousemove = function () {
        b.style.backgroundColor = 'yellowgreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}


function onmouseover51() {
    var b = document.getElementById('btn51');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover6() {
    var b = document.getElementById('btn6');
    b.onmousemove = function () {
        b.style.backgroundColor = 'yellowgreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}

function onmouseover61() {
    var b = document.getElementById('btn61');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
    }
    b.onmouseleave = function () {
        b.style.backgroundColor = '#404d5b';
    }
}


function preview() {
    var title = document.getElementById('td1').innerHTML;
    document.getElementById('notice-title').innerHTML=title;
    var content = document.getElementById('td2').innerHTML;
    document.getElementById('notice-content').innerHTML=content;
}
