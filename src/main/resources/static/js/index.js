function showTime(){
    nowtime=new Date();
    year=nowtime.getFullYear();
    month=nowtime.getMonth()+1;
    date=nowtime.getDate();
    hours=nowtime.getHours();
    min=nowtime.getMinutes();
    sec=nowtime.getSeconds();
    day=nowtime.getDay();
    //document.getElementById("mytime").innerHTML=year+"年"+month+"月"+date+"日 "+hours+":"+min+":"+sec+" 星期"+day;
}

setInterval("showTime()",1000);


function userSelect() {
    document.getElementById('ifm').src="/touserSelect";
    $("#ifm").load();
}

function addUser() {
    document.getElementById('ifm').src="/toaddUser";
    $('#ifm').load();
}

function departmentSelect() {
    document.getElementById('ifm').src="/todepartmentSelect";
    $("#ifm").load();
}

function addDepartment() {
    document.getElementById('ifm').src="/toaddDepartment";
    $("#ifm").load();
}


function jobSelect() {
    document.getElementById('ifm').src="/tojobSelect";
    $("#ifm").load();
}

function addJob() {
    document.getElementById('ifm').src="/toaddJob";
    $("#ifm").load();
}

function staffSelect() {
    document.getElementById('ifm').src="/tostaffSelect";
    $("#ifm").load();
}

function addStaff() {
    document.getElementById('ifm').src="/toaddStaff";
    $("#ifm").load();
}

function noticeSelect() {
    document.getElementById('ifm').src="/tonoticeSelect";
    $("#ifm").load();
}

function addNotice() {
    document.getElementById('ifm').src="/toaddNotice";
    $("#ifm").load();
}

function documentSelect() {
    document.getElementById('ifm').src="/todocumentSelect";
    $("#ifm").load();
}

function uploadDocument() {
    document.getElementById('ifm').src="/touploadDocument";
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

function onmouseover12() {
    var b = document.getElementById('btn12');
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

function onmouseover22() {
    var b = document.getElementById('btn22');
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

function onmouseover32() {
    var b = document.getElementById('btn32');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
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

function onmouseover42() {
    var b = document.getElementById('btn42');
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

function onmouseover52() {
    var b = document.getElementById('btn52');
    b.onmousemove = function () {
        b.style.backgroundColor = 'darkseagreen';
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

function onmouseover62() {
    var b = document.getElementById('btn62');
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
