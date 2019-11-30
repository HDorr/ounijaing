function ordempselectbtn() {
    flag= 1;
    lenth = 0;
    console.log("*"+lenth);
    searchnm = $("#empsearchname").val();
    searchcardid = $("#empsearchcardid").val();
    searchsex = $("#sexselect").val();
    searchjob = $("#jobselect").val();
    searchdept = $("#deptselect").val();
    searchphone = $("#empsearchphont").val();
    var date = {job:searchjob,sex:searchsex,dept:searchdept,tel:searchphone,name:searchnm,cardid:searchcardid};
    console.log(date);

    if(searchnm=="" && searchcardid=="" &&searchphone=="" && searchdept=="" && searchsex=="" && searchjob==""){
        $("#tbody").html("");
        $.ajax({
            type: "GET",
            url: "/Administartor/allemp",
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
                    alldata[o]['jobid'] = jodidtoname(alldata[o]['jobid']);
                    alldata[o]['deptid'] = deptidtoname(alldata[o]['deptid']);
                    alldata[o]['empcreatedate'] = transDate(alldata[o]['empcreatedate']);
                }
                console.log(alldata);
                for(var j = 0;j<4;j++){
                    if(alldata[j]==null){
                        break;
                    }
                    item = "<tr><td style=\"display: none\" id = \"empid"+flag.toString()+"\""+">" +alldata[j]['empid']+
                        "</td><td>"+alldata[j]['empname']+
                        "</td><td>"+alldata[j]['empsex']+
                        "</td><td>"+alldata[j]['empphone']+
                        "</td><td>"+alldata[j]['empemail']+
                        "</td><td>"+alldata[j]['jobid']+
                        "</td><td>"+alldata[j]['empeducation']+
                        "</td><td>"+alldata[j]['empcardid']+
                        "</td><td>"+alldata[j]['deptid']+
                        "</td><td>"+alldata[j]['empaddress']+
                        "</td><td>"+alldata[j]['empcreatedate'];
                        //"</td><td>"+"<a href='/totransStaff' onclick=empxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        //"</td><td>"+"<a href='/tostaffSelect' onclick=empshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                            item = "<tr><td style=\"display: none\" id = \"empid"+flag.toString()+"\""+">" +alldata[j]['empid']+
                                "</td><td>"+alldata[j]['empname']+
                                "</td><td>"+alldata[j]['empsex']+
                                "</td><td>"+alldata[j]['empphone']+
                                "</td><td>"+alldata[j]['empemail']+
                                "</td><td>"+alldata[j]['jobid']+
                                "</td><td>"+alldata[j]['empeducation']+
                                "</td><td>"+alldata[j]['empcardid']+
                                "</td><td>"+alldata[j]['deptid']+
                                "</td><td>"+alldata[j]['empaddress']+
                                "</td><td>"+alldata[j]['empcreatedate'];
                                //"</td><td>"+"<a href='/totransStaff' onclick=empxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                //"</td><td>"+"<a href='/tostaffSelect' onclick=empshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
        var date2 = {job:searchjob,sex:searchsex,dept:searchdept,tel:searchphone,name:searchnm,cardid:searchcardid};
        console.log(date2)
        $("#tbody").html("");
        ///var status  = $("#")
        $.ajax({
            type: "POST",
            url: "/Administartor/searchemp",
            data: date2,
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
                for(var o = 0; o<lenth;o++){
                    alldata[o]['jobid'] = jodidtoname(alldata[o]['jobid']);
                    alldata[o]['deptid'] = deptidtoname(alldata[o]['deptid']);
                    alldata[o]['empcreatedate'] = transDate(alldata[o]['empcreatedate']);
                }
                for(var j = 0;j<4;j++){
                    if(alldata[j]==null){
                        break;
                    }
                    item = "<tr><td style=\"display: none\" id = \"empid"+flag.toString()+"\""+">" +alldata[j]['empid']+
                        "</td><td>"+alldata[j]['empname']+
                        "</td><td>"+alldata[j]['empsex']+
                        "</td><td>"+alldata[j]['empphone']+
                        "</td><td>"+alldata[j]['empemail']+
                        "</td><td>"+alldata[j]['jobid']+
                        "</td><td>"+alldata[j]['empeducation']+
                        "</td><td>"+alldata[j]['empcardid']+
                        "</td><td>"+alldata[j]['deptid']+
                        "</td><td>"+alldata[j]['empaddress']+
                        "</td><td>"+alldata[j]['empcreatedate'];
                        //"</td><td>"+"<a href='/totransStaff' onclick=empxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        //"</td><td>"+"<a href='/tostaffSelect' onclick=empshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                            url: "/Adminstrater/searchemp",
                            data: date2,
                            dataType: 'json',
                            success: function (alldata) {
                                console.log(alldata);
                                flag=1;
                                $("#tbody").html("");
                                items="";
                                for (var j = ((num - 1) * 4); j < (num * 4); j++) {
                                    if(data3[j]==null){
                                        break;
                                    }
                                    item = "<tr><td style=\"display: none\" id = \"empid"+flag.toString()+"\""+">" +alldata[j]['empid']+
                                        "</td><td>"+alldata[j]['empname']+
                                        "</td><td>"+alldata[j]['empsex']+
                                        "</td><td>"+alldata[j]['empphone']+
                                        "</td><td>"+alldata[j]['empemail']+
                                        "</td><td>"+alldata[j]['jobid']+
                                        "</td><td>"+alldata[j]['empeducation']+
                                        "</td><td>"+alldata[j]['empcardid']+
                                        "</td><td>"+alldata[j]['deptid']+
                                        "</td><td>"+alldata[j]['empaddress']+
                                        "</td><td>"+alldata[j]['empcreatedate'];
                                        //"</td><td>"+"<a href='/totransStaff' onclick=empxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                        //"</td><td>"+"<a href='/tostaffSelect' onclick=empshanchu"+flag.toString()+"()"+">"+"删除</a>";
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

function jodidtoname(jobid) {
    var jobname;
    if (jobid==null){
        jobname = "";
    }
    else {
        jobname = $('#jobselect option[value="'+jobid+'"]').text();
    }
    return jobname;
}

function deptidtoname(deptid) {
    var deptname;
    if (deptid==null){
        deptname = "";
    }
    else {
        deptname = $('#deptselect option[value="'+deptid+'"]').text();
    }
    return deptname;
}

function transDate(date) {
    console.log(date);
    var dateString = "";
    var date = new Date(date);
    console.log(date);
    dateString = date.getFullYear()+"."+String(Number(date.getMonth())+1)+"."+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    return dateString;
}

function initdeptselect() {
    $.ajax({
        type:"GET",
        url:"/Administartor/alldept",
        success: function (alldept) {

            $.each(alldept,function (i,result) {

                item = "<option value='"+result['deptid']+"'>"+result['deptname']+"</option>";
                $("#deptselect").append(item);
            });
        }
    })
}

function initjobselect() {
    $.ajax({
        type:"GET",
        url:"/Administartor/alljob",
        success: function (alljob) {

            $.each(alljob,function (i,result) {

                item = "<option value='"+result['jobid']+"'>"+result['jobname']+"</option>";
                $("#jobselect").append(item);
            });
        }
    })
}