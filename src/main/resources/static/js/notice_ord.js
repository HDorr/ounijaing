function searchclick() {
    flag= 1;
    lenth = 0;
    console.log("*"+lenth);
    searchnm = $("#searchnoticetitle").val();
    searchcontent  = $("#searchnoticecontent").val();
    if(searchnm=="" && searchcontent==""){
        $("#tbody").html("");
        $.ajax({
            type: "GET",
            url: "/Adminstrater/allnotice",
            dataType: 'json',
            success: function (data) {
                alldata = data;

                var items = ""
                var item = "";
                console.log(data);
                console.log(data[0]['noticeuserid'])
                $.each(alldata,function (i,result) {
                    lenth = lenth+1;
                    //item = "<tr><td>"+result['userloginname']+"</td><td>"+result['userpassword']+"</td><td>"+result['userusername']+"</td><td>"+result['userstatus']+"</td><td>"+result['userlcreatedate']+"</td><td>"+"<a href=''>操作</a>"+"</td></tr>";
                    //$("#table").append(item);
                });
                for(var o = 0; o<lenth;o++){
                    console.log(alldata[o]['noticeuserid'])
                    alldata[o]['noticecreatedate'] = transDate(alldata[o]['noticecreatedate']);
                    alldata[o]['noticeuserid'] = useridtoname(alldata[o]['noticeuserid']);
                    console.log(alldata[o]['noticeuserid'])
                }

                for(var j = 0;j<4;j++){
                    if(data[j]==null){
                        break;
                    }
                    item = "<tr><td style=\"display: none\" id = \"noticeid"+flag.toString()+"\""+">" +alldata[j]['noticeid']+
                        "</td><td td='td2'>"+alldata[j]['noticetitle']+
                        "</td><td>"+alldata[j]['noticecontent']+
                        "</td><td>"+alldata[j]['noticecreatedate']+
                        "</td><td>"+alldata[j]['noticeuserid']+
                        //"</td><td>"+"<a href='/totransNotice' onclick=noticexiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        "</td><td>"+"<a data-target=\"#myModal\" data-toggle=\"modal\" onclick=noticeyulan"+flag.toString()+"()"+">"+"预览</a>";
                        //"</td><td>"+"<a href='/tonoticeSelect' onclick=noticeshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                            item = "<tr><td style=\"display: none\" id = \"noticeid"+flag.toString()+"\""+">" +alldata[j]['noticeid']+
                                "</td><td td='td2'>"+alldata[j]['noticetitle']+
                                "</td><td>"+alldata[j]['noticecontent']+
                                "</td><td>"+alldata[j]['noticecreatedate']+
                                "</td><td>"+alldata[j]['noticeuserid']+
                                //"</td><td>"+"<a href='/totransNotice' onclick=noticexiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                "</td><td>"+"<a data-target=\"#myModal\" data-toggle=\"modal\" onclick=noticeyulan"+flag.toString()+"()"+">"+"预览</a>";
                                //"</td><td>"+"<a href='/tonoticeSelect' onclick=noticeshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
        var data2 = {title:searchnm,content:searchcontent};
        console.log(data2)
        $("#tbody").html("");
        ///var status  = $("#")
        $.ajax({
            type: "POST",
            url: "/Adminstrater/searchnotice",
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
                        alldata[o]['noticecreatedate'] = transDate(alldata[o]['noticecreatedate']);
                        alldata[o]['noticeuserid'] = useridtoname(alldata[o]['noticeuserid']);
                    }
                    item = "<tr><td style=\"display: none\" id = \"noticeid"+flag.toString()+"\""+">" +alldata[j]['noticeid']+
                        "</td><td td='td2'>"+alldata[j]['noticetitle']+
                        "</td><td>"+alldata[j]['noticecontent']+
                        "</td><td>"+alldata[j]['noticecreatedate']+
                        "</td><td>"+alldata[j]['noticeuserid']+
                        //"</td><td>"+"<a href='/totransNotice' onclick=noticexiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        "</td><td>"+"<a data-target=\"#myModal\" data-toggle=\"modal\" onclick=noticeyulan"+flag.toString()+"()"+">"+"预览</a>";
                        //"</td><td>"+"<a href='/tonoticeSelect' onclick=noticeshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                                        alldata[o]['noticecreatedate'] = transDate(alldata[o]['noticecreatedate']);
                                        alldata[o]['noticeuserid'] = useridtoname(alldata[o]['noticeuserid']);
                                    }
                                    item = "<tr><td style=\"display: none\" id = \"noticeid"+flag.toString()+"\""+">" +alldata[j]['noticeid']+
                                        "</td><td td='td2'>"+alldata[j]['noticetitle']+
                                        "</td><td>"+alldata[j]['noticecontent']+
                                        "</td><td>"+alldata[j]['noticecreatedate']+
                                        "</td><td>"+alldata[j]['noticeuserid']+
                                        //"</td><td>"+"<a href='/totransNotice' onclick=noticexiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                        "</td><td>"+"<a data-target=\"#myModal\" data-toggle=\"modal\" onclick=noticeyulan"+flag.toString()+"()"+">"+"预览</a>";
                                        //"</td><td>"+"<a href='/tonoticeSelect' onclick=noticeshanchu"+flag.toString()+"()"+">"+"删除</a>";
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

function inituserList() {

    $.ajax({
        type:"GET",
        url:"/Adminstrater/allUser",
        success: function (alldept) {

            $.each(alldept,function (i,result) {

                item = "<option value='"+result['userid']+"'>"+result['userusername']+"</option>";
                $("#userlist").append(item);
            });
        }
    })

}

function useridtoname(userid) {
    console.log(userid)
    var username;
    if (userid==null){
        username = "";
    }
    else {
        username = $('#userlist option[value="'+userid+'"]').text();
    }
    console.log(username);
    return username;
}

function noticeyulan1() {
    var noticeid = $("#noticeid1").text();
    console.log(noticeid);
    var data = {noticeid:noticeid};
    $.ajax({
        type: "POST",
        url: "/Administartor/yulannotice",
        data: data,
        success: function (alldata) {
            console.log(alldata);
            var title = alldata['noticetitle'];
            document.getElementById('notice-title').innerHTML=title;
            var content = alldata['noticecontent'];
            document.getElementById('notice-content').innerHTML=content;
        }
    })

}

function noticeyulan2() {
    var noticeid = $("#noticeid2").text();
    console.log(noticeid);
    var data = {noticeid:noticeid};
    $.ajax({
        type: "POST",
        url: "/Administartor/yulannotice",
        data: data,
        success: function (alldata) {
            console.log(alldata);
            var title = alldata['noticetitle'];
            document.getElementById('notice-title').innerHTML=title;
            var content = alldata['noticecontent'];
            document.getElementById('notice-content').innerHTML=content;
        }
    })

}

function noticeyulan3() {
    var noticeid = $("#noticeid3").text();
    console.log(noticeid);
    var data = {noticeid:noticeid};
    $.ajax({
        type: "POST",
        url: "/Administartor/yulannotice",
        data: data,
        success: function (alldata) {
            console.log(alldata);
            var title = alldata['noticetitle'];
            document.getElementById('notice-title').innerHTML=title;
            var content = alldata['noticecontent'];
            document.getElementById('notice-content').innerHTML=content;
        }
    })

}

function noticeyulan4() {
    var noticeid = $("#noticeid4").text();
    console.log(noticeid);
    var data = {noticeid:noticeid};
    $.ajax({
        type: "POST",
        url: "/Administartor/yulannotice",
        data: data,
        success: function (alldata) {
            console.log(alldata);
            var title = alldata['noticetitle'];
            document.getElementById('notice-title').innerHTML=title;
            var content = alldata['noticecontent'];
            document.getElementById('notice-content').innerHTML=content;
        }
    })

}
