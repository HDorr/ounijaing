
function documentsearchbtn() {
    flag= 1;
    lenth = 0;
    console.log("*"+lenth);
    searchnm = $("#documentsearchname").val();
    if(searchnm==""){
        $("#tbody").html("");
        $.ajax({
            type: "GET",
            url: "/Adminstrater/alldocument",
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
                    alldata[o]['documentcreate_date'] = transDate(alldata[o]['documentcreate_date']);
                    alldata[o]['documentuserid'] = useridtoname(alldata[o]['documentuserid']);
                    alldata[o]['documentpath'] = "/file/"+alldata[o]['documentfilename']
                }
                console.log(alldata);

                for(var j = 0;j<4;j++){
                    if(data[j]==null){
                        break;
                    }
                    item = "<tr><td style=\"display: none\" id = \"documentid"+flag.toString()+"\""+">" +alldata[j]['documentid']+
                        "</td>><td style=\"display: none\" id = \"documentfilename"+flag.toString()+"\""+">" +alldata[j]['documentfilename']+
                        "</td><td>"+alldata[j]['documenttitle']+
                        "</td><td>"+alldata[j]['documentcreate_date']+
                        "</td><td>"+alldata[j]['documentuserid']+
                        "</td><td>"+alldata[j]['documentremark']+
                        //"</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>";
                        //"</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                        for (var j = ((num - 1) * 4); j < (num * 4); j++) {
                            if(alldata[j]==null){
                                break;
                            }
                            item = "<tr><td style=\"display: none\" id = \"documentid"+flag.toString()+"\""+">" +alldata[j]['documentid']+
                                "</td>><td style=\"display: none\" id = \"documentfilename"+flag.toString()+"\""+">" +alldata[j]['documenfilename']+
                                "</td><td>"+alldata[j]['documenttitle']+
                                "</td><td>"+alldata[j]['documentcreate_date']+
                                "</td><td>"+alldata[j]['documentuserid']+
                                "</td><td>"+alldata[j]['documentremark']+
                                //"</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>";
                                //"</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
        var data2 = {title:searchnm};
        console.log(data2)
        $("#tbody").html("");
        ///var status  = $("#")
        $.ajax({
            type: "POST",
            url: "/Adminstrater/searchdocument",
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
                        alldata[o]['documentcreate_date'] = transDate(alldata[o]['documentcreate_date']);
                        alldata[o]['documentuserid'] = useridtoname(alldata[o]['documentuserid']);
                        alldata[o]['documentpath'] = "/file/"+alldata[o]['documentfilename']
                    }
                    item = "<tr><td style=\"display: none\" id = \"documentid"+flag.toString()+"\""+">" +alldata[j]['documentid']+
                        "</td>><td style=\"display: none\" id = \"documenfilename"+flag.toString()+"\""+">" +alldata[j]['documentfilename']+
                        "</td><td>"+alldata[j]['documenttitle']+
                        "</td><td>"+alldata[j]['documentcreate_date']+
                        "</td><td>"+alldata[j]['documentuserid']+
                        "</td><td>"+alldata[j]['documentremark']+
                        //"</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"
                        "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>";
                        //"</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                                for (var j = ((num - 1) * 4); j < (num * 4); j++) {
                                    if(data3[j]==null){
                                        break;
                                    }
                                    for(var o = 0; o<lenth;o++){
                                        alldata[o]['documentcreate_date'] = transDate(alldata[o]['documentcreate_date']);
                                        alldata[o]['documentuserid'] = useridtoname(alldata[o]['documentuserid']);
                                        alldata[o]['documentpath'] = "/file/"+alldata[o]['documentfilename']
                                    }
                                    item = "<tr><td style=\"display: none\" id = \"documentid"+flag.toString()+"\""+">" +alldata[j]['documentid']+
                                        "</td>><td style=\"display: none\" id = \"documenfilename"+flag.toString()+"\""+">" +alldata[j]['documentfilename']+
                                        "</td><td>"+alldata[j]['documenttitle']+
                                        "</td><td>"+alldata[j]['documentcreate_date']+
                                        "</td><td>"+alldata[j]['documentuserid']+
                                        "</td><td>"+alldata[j]['documentremark']+
                                        //"</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                        "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>";
                                        //"</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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

function useridtoname(userid) {
    console.log(userid)
    var username;
    if (userid==null){
        username = "";
    }
    else {
        username = $('#documentuserlist option[value="'+userid+'"]').text();
    }
    console.log(username);
    return username;
}

function inituserList() {

    $.ajax({
        type:"GET",
        url:"/Adminstrater/allUser",
        success: function (alldept) {

            $.each(alldept,function (i,result) {

                item = "<option value='"+result['userid']+"'>"+result['userusername']+"</option>";
                $("#documentuserlist").append(item);
            });
        }
    })

}