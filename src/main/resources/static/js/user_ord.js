function orduserselectbtn() {
    flag= 1;
    lenth = 0;
    console.log("*"+lenth);
    searchnm = $("#orduserselectname").val();
    sta = $("#orduserstatusselect").val();
    if(searchnm=="" && sta==""){
        $("#tbody").html("");
        $.ajax({
            type: "GET",
            url: "/Adminstrater/allUser",
            dataType: 'json',
            success: function (data) {
                alldata = data;

                var items = ""
                var item = "";
                console.log(data);
                $.each(alldata,function (i,result) {
                    lenth = lenth+1;
                    //item = "<tr><td>"+result['userloginname']+"</td><td>"+result['userpassword']+"</td><td>"+result['userusername']+"</td><td>"+result['userstatus']+"</td><td>"+result['userlcreatedate']+"</td><td>"+"<a href=''>操作</a>"+"</td></tr>";
                    //$("#table").append(item);
                });
                for(var o = 0; o<lenth;o++){
                    alldata[o]['usercreatedate'] = transDate(alldata[o]['usercreatedate']);
                }

                for(var j = 0;j<4;j++){
                    if(data[j]==null){
                        break;
                    }
                    item = "<tr><td style=\"display: none\" id = \"userid"+flag.toString()+"\""+">" +alldata[j]['userid']+
                        "</td><td td='td2'>"+alldata[j]['userloginname']+
                        "</td><td>"+alldata[j]['userpassword']+
                        "</td><td>"+alldata[j]['userusername']+
                        "</td><td>"+alldata[j]['userstatus']+
                        "</td><td>"+alldata[j]['usercreatedate'];
                        //"</td><td>"+"<a href='/totransUser' onclick=xiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        //"</td><td>"+"<a href='/touserSelect' onclick=shanchu"+flag.toString()+"()"+">"+"删除</a>";
                    items = items+item;
                    flag++;
                }
                $('#tbody').append(items);
                pagenum = parseInt((lenth-1)/4) +1;
                console.log(lenth);
                console.log(pagenum);
                $("#page").paging({
                    nowPage: 1, // 当前页码
                    pageNum: pagenum, // 总页码
                    buttonNum: 5, //要展示的页码数量
                    canJump: 1,// 是否能跳转。0=不显示（默认），1=显示
                    showOne: 0,//只有一页时，是否显示。0=不显示,1=显示（默认）
                    callback: function (num) { //回调函数
                        console.log(num);
                        flag=1;
                        $("#tbody").html("");
                        items=""
                        for (var i = ((num - 1) * 4); i < (num * 4); i++) {
                            if(alldata[i]==null){
                                break;
                            }
                            item = "<tr><td style=\"display: none\" id = \"userid"+flag.toString()+"\""+">" +alldata[i]['userid']+
                                "</td><td>"+alldata[i]['userloginname']+
                                "</td><td>"+alldata[i]['userpassword']+
                                "</td><td>"+alldata[i]['userusername']+
                                "</td><td>"+alldata[i]['userstatus']+
                                "</td><td>"+alldata[i]['usercreatedate'];
                                //"</td><td>"+"<a href='/totransUser' onclick=xiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                //"</td><td>"+"<a href='/touserSelect' onclick=shanchu"+flag.toString()+"()"+">"+"删除</a>";
                            items = items+item;
                            flag++;
                        }
                        console.log(items);
                        $("#tbody").append(items);
                    }

                });

            }
        })
    }
    else{
        var data2 = {searchname:searchnm,statusStr:sta};
        console.log(data2)
        $("#tbody").html("");
        ///var status  = $("#")
        $.ajax({
            type: "POST",
            url: "/Adminstrater/searchUser",
            data: data2,
            dataType: 'json',
            success: function (data3) {
                alldata=data3;
                var items = ""
                var item = "";
                console.log(data3);
                $.each(alldata,function (i,result) {
                    lenth = lenth+1;
                    //item = "<tr><td>"+result['userloginname']+"</td><td>"+result['userpassword']+"</td><td>"+result['userusername']+"</td><td>"+result['userstatus']+"</td><td>"+result['userlcreatedate']+"</td><td>"+"<a href=''>操作</a>"+"</td></tr>";
                    //$("#table").append(item);
                });
                for(var j = 0;j<4;j++){
                    if(alldata[j]==null){
                        break;
                    }
                    for(var o = 0; o<lenth;o++){
                        alldata[o]['usercreatedate'] = transDate(alldata[o]['usercreatedate']);
                    }
                    item = "<tr><td style=\"display: none\" id = \"userid"+flag.toString()+"\""+">" +alldata[j]['userid']+
                        "</td><td>"+alldata[j]['userloginname']+
                        "</td><td>"+alldata[j]['userpassword']+
                        "</td><td>"+alldata[j]['userusername']+
                        "</td><td>"+alldata[j]['userstatus']+
                        "</td><td>"+alldata[j]['usercreatedate'];
                        //"</td><td>"+"<a href='/totransUser' onclick=xiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        //"</td><td>"+"<a href='/touserSelect' onclick=shanchu"+flag.toString()+"()"+">"+"删除</a>";
                    items = items+item;
                    flag++;
                }
                $('#tbody').append(items);
                pagenum = parseInt((lenth-1)/4) +1;
                console.log(lenth);
                console.log(pagenum);

                $("#page").paging({
                    nowPage: 1, // 当前页码
                    pageNum: pagenum, // 总页码
                    buttonNum: 5, //要展示的页码数量
                    canJump: 1,// 是否能跳转。0=不显示（默认），1=显示
                    showOne: 0,//只有一页时，是否显示。0=不显示,1=显示（默认）
                    callback: function (num) { //回调函数
                        console.log(num);
                        $.ajax({
                            type: "POST",
                            url: "/Adminstrater/searchUser",
                            data: data2,
                            dataType: 'json',
                            success: function (alldata) {
                                console.log(alldata);
                                flag=1;
                                $("#tbody").html("");
                                items=""
                                for (var i = ((num - 1) * 4); i < (num * 4); i++) {
                                    if(data3[i]==null){
                                        break;
                                    }
                                    for(var o = 0; o<lenth;o++){
                                        alldata[o]['usercreatedate'] = transDate(alldata[o]['usercreatedate']);
                                    }
                                    item = "<tr><td style=\"display: none\" id = \"userid"+flag.toString()+"\""+">" +alldata[i]['userid']+
                                        "</td><td>"+alldata[i]['userloginname']+
                                        "</td><td>"+alldata[i]['userpassword']+
                                        "</td><td>"+alldata[i]['userusername']+
                                        "</td><td>"+alldata[i]['userstatus']+
                                        "</td><td>"+alldata[i]['usercreatedate'];
                                        //"</td><td>"+"<a href='/totransUser' onclick=xiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                        //"</td><td>"+"<a href='/touserSelect' onclick=shanchu"+flag.toString()+"()"+">"+"删除</a>";
                                    items = items+item;
                                    flag++;
                                }
                                console.log(items);
                                $("#tbody").append(items);
                            }
                        });
                    }
                });


            }
        })
    }
}
function transDate(date) {
    var dateString = "";
    var date = new Date(date);
    dateString = date.getFullYear()+"."+String(Number(date.getMonth())+1)+"."+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    return dateString;
}