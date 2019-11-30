package com.example.csi.Controller;


import com.example.csi.Dao.DeptDao;
import com.example.csi.Dao.EmpDao;
import com.example.csi.Dao.JobDao;
import com.example.csi.Entity.Dept;
import com.example.csi.Entity.Emp;
import com.example.csi.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import java.security.PublicKey;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;

@Controller
public class EmpController {
    @Autowired
    EmpDao empDao;
    DeptDao deptDao;
    JobDao jobDao;

    private Integer cacheempid=0;

    @RequestMapping("/tostaffSelect")
    public String tostaffSelect(){
        return "/staffSelect";
    }

    @RequestMapping("/toaddStaff")
    public String toaddStaff(){
        return "/addStaff";
    }

    @RequestMapping("/totransStaff")
    public String totransStaff(){
        return "/transStaff";
    }

    @RequestMapping("/tostaffSelect_ord")
    public String tostaffselectord(){
        return "/staffselect_ord";
    }



    @RequestMapping("/cacheempid")
    @ResponseBody
    public Emp cacheempid(Integer empid){
        Emp emp = empDao.findByEmpid(empid);
        cacheempid = empid;
        return emp;
    }

    @RequestMapping("/returnempid")
    @ResponseBody
    public Emp returnempid(){
        Emp emp = empDao.findByEmpid(cacheempid);
        return emp;
    }

    @ResponseBody
    @RequestMapping("/Administartor/changeemp")
    public Response changeEmp(HttpServletRequest request)
    {
        Emp emp = empDao.findByEmpid(cacheempid);
        emp.setEmpaddress(request.getParameter("empaddress"));
        Integer deptid = Integer.parseInt(request.getParameter("deptid"));
        emp.setDeptid(deptid);
        Integer jobid = Integer.parseInt(request.getParameter("jobid"));
        emp.setJobid(jobid);
        String str = request.getParameter("empbirthday");
        Date date;
        try{
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            date = df.parse(str);
        }catch (Exception e) {
            date = null;
        }
        emp.setEmpbirthday(date);
        emp.setEmpcardid(request.getParameter("empcardid"));
        emp.setEmpeducation(request.getParameter("empeducation"));
        emp.setEmpemail(request.getParameter("empemail"));
        emp.setEmphobby(request.getParameter("emphobby"));
        emp.setEmpname(request.getParameter("empname"));
        emp.setEmpparty(request.getParameter("empparty"));
        emp.setEmpphone(request.getParameter("empphone"));
        emp.setEmppostcode(request.getParameter("emppostcode"));
        emp.setEmpqqnum(request.getParameter("empqqnum"));
        emp.setEmprace(request.getParameter("emprace"));
        emp.setEmpremark(request.getParameter("empremark"));
        emp.setEmpspeciality(request.getParameter("empspeciality"));
        emp.setEmptel(request.getParameter("emptel"));
        Integer sex = Integer.parseInt(request.getParameter("empsex"));
        emp.setEmpsex(sex);
        empDao.save(emp);
        cacheempid = 0;
        return new Response(1,"修改成功");
    }

    @ResponseBody
    @RequestMapping("/Administartor/addemp")
    public Response addEmp(HttpServletRequest request)
    {
        Emp emp = new Emp();
        emp.setEmpaddress(request.getParameter("empaddress"));
        Integer deptid = Integer.parseInt(request.getParameter("deptid"));
        emp.setDeptid(deptid);
        Integer jobid = Integer.parseInt(request.getParameter("jobid"));
        emp.setJobid(jobid);
        String str = request.getParameter("empbirthday");
        Date date;
        try{
            SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd");
            date = df.parse(str);
        }catch (Exception e) {
            date = null;
        }
        emp.setEmpbirthday(date);
        emp.setEmpcardid(request.getParameter("empcardid"));
        emp.setEmpeducation(request.getParameter("empeducation"));
        emp.setEmpemail(request.getParameter("empemail"));
        emp.setEmphobby(request.getParameter("emphobby"));
        emp.setEmpname(request.getParameter("empname"));
        emp.setEmpparty(request.getParameter("empparty"));
        emp.setEmpphone(request.getParameter("empphone"));
        emp.setEmppostcode(request.getParameter("emppostcode"));
        emp.setEmpqqnum(request.getParameter("empqqnum"));
        emp.setEmprace(request.getParameter("emprace"));
        emp.setEmpremark(request.getParameter("empremark"));
        emp.setEmpspeciality(request.getParameter("empspeciality"));
        emp.setEmptel(request.getParameter("emptel"));
        Integer sex = Integer.parseInt(request.getParameter("empsex"));
        emp.setEmpsex(sex);
        empDao.save(emp);
        return new Response(1,"修改成功");
    }


    @ResponseBody
    @RequestMapping("/Administartor/allemp")
    public List<Emp> allEmp()
    {
        List<Emp> empList = empDao.findAll();
        System.out.println(empList.get(0).getEmpcreatedate());
        return empList;
    }

    @RequestMapping("/Administartor/searchemp")
    @ResponseBody
    public List<Emp> searchEmp(HttpServletRequest request)
    {
        String jobStr = request.getParameter("job");
        String sexStr = request.getParameter("sex");
        String name = request.getParameter("name");
        String tel = request.getParameter("tel");
        String cardid = request.getParameter("cardid");
        String deptStr = request.getParameter("dept");


        List<Emp> list1;
        List<Emp> list2;
        List<Emp> list3;
        List<Emp> list4;
        List<Emp> list5;
        List<Emp> list6;
        List<Emp> listA;
        List<Emp> listB;
        List<Emp> listC;
        if(!deptStr.equals(""))
        {
            Integer dept = Integer.parseInt(deptStr );
            list1 = empDao.findByDeptid(dept);
        }
        else
        {
            list1 = null;
        }

        if(!jobStr.equals(""))
        {
            Integer job = Integer.parseInt( jobStr );
            list2 = empDao.findByJobid(job);
        }
        else
        {
            list2 = null;
        }
        if(!sexStr.equals(""))
        {
            Integer sex = Integer.parseInt(sexStr );
            list3 = empDao.findByEmpsex(sex);
        }
        else
        {
            list3 = null;
        }

        if(!name.equals(""))
        {
            list4 = empDao.findByEmpname(name);
        }
        else
        {
            list4 = null;
        }

        if(!tel.equals(""))
        {
            list5 = empDao.findByEmpphone(tel);
        }
        else
        {
            list5 = null;
        }
        if(!cardid.equals(""))
        {
            list6 = empDao.findByEmpcardid(cardid);
        }
        else
        {
            list6 = null;
        }

        if(list1 !=null && list2 !=null)
        {
            list1.retainAll(list2);
            listA = list1;
        }
        else if (list1==null && list2!=null)
        {
            listA = list2;
        }
        else if(list1 !=null && list2 == null)
        {
            listA = list1;
        }
        else
        {
            listA = null;
        }

        if(list3 !=null && list4 !=null)
        {
            list3.retainAll(list4);
            listB = list3;
        }
        else if (list3==null && list4!=null)
        {
            listB = list4;
        }
        else if(list3 !=null && list4 == null)
        {
            listB = list3;
        }
        else
        {
            listB = null;
        }

        if(list5 !=null && list6 !=null)
        {
            list5.retainAll(list6);
            listC = list5;
        }
        else if (list5==null && list6!=null)
        {
            listC = list6;
        }
        else if(list5 !=null && list6 == null)
        {
            listC = list5;
        }
        else
        {
            listC = null;
        }

        if(listA !=null && listB !=null)
        {
            listA.retainAll(listB);
        }
        else if (listA == null && listB !=null)
        {
            listA = listB;
        }

        if (listA !=null && listC!=null)
        {
            listA.retainAll(listC);
        }
        else if (listA == null && listC !=null)
        {
            listA = listC;
        }

        List<Emp> empList = listA;
        return  empList;
    }

    @RequestMapping("/Administartor/deleteemp")
    @ResponseBody
    public Response deleteEmp(Integer empid)
    {
        empDao.delete(empDao.findByEmpid(empid));
        return new Response(1,"删除成功");
    }



}

