function deptxiugai1() {
    transdeptid = $("#deptid1").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/cachedeptid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}
function deptxiugai2() {
    transdeptid = $("#deptid2").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/cachedeptid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })

}
function deptxiugai3() {
    transdeptid = $("#deptid3").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/cachedeptid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })

}
function deptxiugai4() {
    transdeptid = $("#deptid4").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/cachedeptid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })

}

function deptshanchu1() {
    transdeptid = $("#deptid1").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletedept",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })
}

function deptshanchu2() {
    transdeptid = $("#deptid2").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletedept",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function deptshanchu3() {
    transdeptid = $("#deptid3").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletedept",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function deptshanchu4() {
    transdeptid = $("#deptid4").text();
    console.log(transdeptid);
    var data = {deptid:transdeptid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletedept",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function deptxiugaibtn() {
    var newdeptname = $("#transdeptname").val();
    var newdeptremark = $("#transdeptremark").val();
    var data = {deptname:newdeptname,deptremark:newdeptremark};
    $.ajax({
        type: "POST",
        url: "/Administartor/changedept",
        data: data,
        success: function (alldata) {
            if (alldata['status'] == 1) {
                alert(alldata['message']);
            }
        }
    })
}

function inittransdepthtml() {
    $.ajax({
        type:"GET",
        url:"/returndeptid",
        success: function (alldata) {
            console.log(alldata);
            $("#transdeptname").val(alldata['deptname']);
            $("#transdeptremark").val(alldata['deptremark']);
        }
    })
}

function adddept() {
    var deptname = $("#adddeptname").val();
    var deptremark = $("#adddeptremark").val();
    var data = {deptname:deptname,deptremark:deptremark};
    console.log(data);
    $.ajax({
        type:"POST",
        url:"/Administartor/adddept",
        data:data,
        dataType:'json',
        success:function(msg){
            if(msg['status']==1){
                alert(msg['message']);
            }
        }
    })
}

