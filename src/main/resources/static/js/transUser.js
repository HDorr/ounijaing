var transUserdata;
var transUserid;
function xiugai1() {
    transUserid = $("#userid1").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/cacheuserid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}

function xiugai2() {
    transUserid = $("#userid2").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/cacheuserid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);

        }

    })
}
function xiugai3() {
    transUserid = $("#userid3").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/cacheuserid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);

        }

    })
}
function xiugai4() {
    transUserid = $("#userid4").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/cacheuserid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}

function inittransuserhtml() {
    $.ajax({
        type:"GET",
        url:"/returnuserid",
        success: function (alldata) {
            console.log(alldata);
            $("#transname").val(alldata['userusername']);
            $("#transloginname").val(alldata['userloginname']);
            if(alldata['userstatus']==1){
                $("#transstatus").val('管理员');
            }
            else {
                $("#transstatus").val('普通用户');
            }
        }
    })


}

function xiugaibtn() {
    var newloginname = $("#transloginname").val();
    var newusername = $("#transname").val();
    var newstatus = $("#transstatus").val();
    var data = {loginname:newloginname,username:newusername,statusStr:newstatus};
    $.ajax({
        type:"POST",
        url:"/Adminstrater/changeUser",
        data:data,
        success: function (alldata) {
            if (alldata['status']==1){
                alert(alldata['message']);
            }
        }

    })

}