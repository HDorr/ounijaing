function shanchu1() {
    transUserid = $("#userid1").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/Adminstrater/deleteuser",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })
}

function shanchu2() {
    transUserid = $("#userid2").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/Adminstrater/deleteuser",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function shanchu3() {
    transUserid = $("#userid3").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/Adminstrater/deleteuser",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}

function shanchu4() {
    transUserid = $("#userid4").text();
    console.log(transUserid);
    var data = {userid:transUserid}
    $.ajax({
        type:"POST",
        url:"/Adminstrater/deleteuser",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }

        }
    })

}