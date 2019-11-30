function adddocumentbtn() {
    var title = $("#filetitle").val();
    var remark = $("#fileremark").val();
    var document = $("#inputfile")[0].files[0];
    var formData = new FormData();
    formData.append("file",$("#inputfile")[0].files[0]);
    formData.append("filetitle",$("#filetitle").val());
    formData.append("fileremark",$("#fileremark").val());
    var data = {file:document,filetitle:title,fileremark:remark};
    console.log(data)
    $.ajax({
        type:"POST",
        dataType:'json',
        async:false,
        data:formData,
        url:"/Administartor/adddocument",
        processData: false,
        contentType: false,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message']);
            }
        }

    })
}

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
                        "</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>"+
                        "</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                                "</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>"+
                                "</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                        "</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>"+
                        "</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                                        "</td><td>"+"<a href='/totransDocument' onclick=documentxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                        "</td><td>"+"<a href='"+alldata[j]['documentpath']+"'"+"download='"+alldata[j]['documentfilename']+"' "+">"+"下载</a>"+
                                        "</td><td>"+"<a href='/todocumentSelect' onclick=documentshanchu"+flag.toString()+"()"+">"+"删除</a>";
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

function documentxiugai1() {
    transdocumentid = $("#documentid1").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/cachedocumentid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}

function documentxiugai2() {
    transdocumentid = $("#documentid2").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/cachedocumentid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}

function documentxiugai3() {
    transdocumentid = $("#documentid3").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/cachedocumentid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}

function documentxiugai4() {
    transdocumentid = $("#documentid4").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/cachedocumentid",
        data:data,
        async:false,
        success: function (alldata) {
            console.log(alldata);
        }
    })
}

function inittransdocumenthtml() {
    $.ajax({
        type:"GET",
        url:"/returndocumentid",
        async:false,
        success: function (alldata) {
            console.log(alldata);
            $("#transdocumenttitle").val(alldata['documenttitle']);
            $("#transdocumentremark").val(alldata['documentremark']);
        }
    })
}
function documentxiugaibtn() {
    var newdocumenttitle = $("#transdocumenttitle").val();
    var newdocumentcontent = $("#transdocumentremark").val();
    var date = {title:newdocumenttitle,remark:newdocumentcontent};
    $.ajax({
        type: "POST",
        url: "/Adminstrater/changedocument",
        data: date,
        success: function (alldata) {
            if (alldata['status'] == 1) {
                alert(alldata['message']);
            }
        }
    })
}

function documentxiazai1() {
    transdocumentfilename = $("#documentfilename1").text();
    console.log(transdocumentfilename);
    var data = {filename:transdocumentfilename}
    $.ajax({
        type:"POST",
        url:"/Administartor/downloaddocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentxiazai2() {
    transdocumentfilename = $("#documentfilename2").text();
    console.log(transdocumentfilename);
    var data = {filename:transdocumentfilename}
    $.ajax({
        type:"POST",
        url:"/Administartor/downloaddocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentxiazai3() {
    transdocumentfilename = $("#documentfilename3").text();
    console.log(transdocumentfilename);
    var data = {filename:transdocumentfilename}
    $.ajax({
        type:"POST",
        url:"/Administartor/downloaddocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentxiazai4() {
    transdocumentfilename = $("#documentfilename4").text();
    console.log(transdocumentfilename);
    var data = {filename:transdocumentfilename}
    $.ajax({
        type:"POST",
        url:"/Administartor/downloaddocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentshanchu1() {
    transdocumentid = $("#documentid1").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/Administartor/delectdocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentshanchu2() {
    transdocumentid = $("#documentid2").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/Administartor/delectdocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentshanchu3() {
    transdocumentid = $("#documentid3").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/Administartor/delectdocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}

function documentshanchu4() {
    transdocumentid = $("#documentid4").text();
    console.log(transdocumentid);
    var data = {documentid:transdocumentid}
    $.ajax({
        type:"POST",
        url:"/Administartor/delectdocument",
        data:data,
        success: function (alldata) {
            if(alldata['status']==1){
                alert(alldata['message']);
            }
            else {
                alert(alldata['message'])
            }

        }
    })
}