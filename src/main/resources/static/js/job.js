function jobxiugai1() {
    transjobid = $("#jobid1").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/cachejobid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}
function deptxiugai2() {
    transjobid = $("#jobid2").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/cachejobid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })

}
function deptxiugai3() {
    transjobid = $("#jobid3").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/cachejobid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })

}
function deptxiugai4() {
    transjobid = $("#jobid4").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/cachejobid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })

}

function jobshanchu1() {
    transjobid = $("#jobid1").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletejob",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })
}

function jobshanchu2() {
    transjobid = $("#jobid2").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletejob",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function jobshanchu3() {
    transjobid = $("#jobid3").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletejob",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function jobshanchu4() {
    transjobid = $("#jobid4").text();
    console.log(transjobid);
    var data = {jobid:transjobid}
    $.ajax({
        type:"POST",
        url:"/Administartor/deletejob",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function jobxiugaibtn() {
    var newjobname = $("#transjobname").val();
    var newjobremark = $("#transjobremark").val();
    var data = {jobname:newjobname,jobremark:newjobremark};
    $.ajax({
        type: "POST",
        url: "/Administartor/changejob",
        data: data,
        success: function (alldata) {
            if (alldata['status'] == 1) {
                alert(alldata['message']);
            }
        }
    })
}

function inittransjobtml() {
    $.ajax({
        type:"GET",
        url:"/returnjobid",
        success: function (alldata) {
            console.log(alldata);
            $("#transjobname").val(alldata['jobname']);
            $("#transjobremark").val(alldata['jobremark']);
        }
    })
}

function addjob() {
    var jobname = $("#addjobname").val();
    var jobremark = $("#addjobremark").val();
    var data = {jobname:jobname,jobremark:jobremark};
    console.log(data);
    $.ajax({
        type:"POST",
        url:"/Administartor/addjob",
        data:data,
        dataType:'json',
        success:function(msg){
            if(msg['status']==1){
                alert(msg['message']);
            }
        }
    })
}
