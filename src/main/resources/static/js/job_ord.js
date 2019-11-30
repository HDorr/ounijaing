function ordjobselectbtn() {

    flag= 1;
    lenth = 0;
    console.log("*"+lenth);
    searchnm = $("#ordjobselectname").val();
    if(searchnm==""){
        $("#tbody").html("");
        $.ajax({
            type: "GET",
            url: "/Administartor/alljob",
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
                for(var j = 0;j<4;j++){
                    if(data[j]==null){
                        break;
                    }
                    item = "<tr><td style=\"display: none\" id = \"jobid"+flag.toString()+"\""+">" +alldata[j]['jobid']+
                        "</td><td td='td2'>"+alldata[j]['jobname']+
                        "</td><td>"+alldata[j]['jobremark'];
                        //"</td><td>"+"<a href='/totransJob' onclick=jobxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        //"</td><td>"+"<a href='/tojobSelect' onclick=jobshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                            item = "<tr><td style=\"display: none\" id = \"jobid"+flag.toString()+"\""+">" +alldata[i]['jobid']+
                                "</td><td td='td2'>"+alldata[i]['jobname']+
                                "</td><td>"+alldata[i]['jobremark'];
                                //"</td><td>"+"<a href='/totransJob' onclick=jobxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                //"</td><td>"+"<a href='/tojobSelect' onclick=jobshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
        var data2 = {jobname:searchnm};
        console.log(data2)
        $("#tbody").html("");
        ///var status  = $("#")
        $.ajax({
            type: "POST",
            url: "/Administartor/searchjob",
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
                    item = "<tr><td style=\"display: none\" id = \"jobid"+flag.toString()+"\""+">" +alldata[j]['jobid']+
                        "</td><td td='td2'>"+alldata[j]['jobname']+
                        "</td><td>"+alldata[j]['jobremark'];
                        //"</td><td>"+"<a href='/totransJob' onclick=jobxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                        //"</td><td>"+"<a href='/tojobSelect' onclick=jobshanchu"+flag.toString()+"()"+">"+"删除</a>";
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
                            url: "/Adminstrater/searchjob",
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
                                    item = "<tr><td style=\"display: none\" id = \"jobid"+flag.toString()+"\""+">" +alldata[i]['jobid']+
                                        "</td><td td='td2'>"+alldata[i]['jobname']+
                                        "</td><td>"+alldata[i]['jobremark'];
                                        ///"</td><td>"+"<a href='/totransJob' onclick=jobxiugai"+flag.toString()+"()"+">"+"修改</a>"+
                                        //"</td><td>"+"<a href='/tojobSelect' onclick=jobshanchu"+flag.toString()+"()"+">"+"删除</a>";
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