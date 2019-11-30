function adduser() {
    var username = $("#addusername").val();
    var password = $("#adduserpassword").val();
    var loginname = $("#adduserloginname").val();
    var status = $("#adduser-status-select").val();
    var data = {username:username,password:password,loginname:loginname,statusStr:status};
    console.log(data);
    $.ajax({
        type:"POST",
        url:"/Adminstrater/addUser",
        data:data,
        dataType:'json',
        success:function(msg){
            if(msg['status']==1){
                alert(msg['message']);
            }
        }
    })

}