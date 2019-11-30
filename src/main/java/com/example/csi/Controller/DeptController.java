package com.example.csi.Controller;


import com.example.csi.Dao.DeptDao;
import com.example.csi.Entity.Dept;
import com.example.csi.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.Date;
import java.util.List;

@Controller
public class DeptController {
    @Autowired
    DeptDao deptDao;

    Integer cachedeptid = 0;

    @RequestMapping("/todepartmentSelect")
    public String todepartmentSelect(){
        return ("departmentSelect");
    }

    @RequestMapping("/toaddDepartment")
    public String toaddDepartment(){
        return ("addDepartment");
    }

    @RequestMapping("/totransDepartment")
    public String totransDepartment(){return ("transDepartment");}

    @RequestMapping("/todepartmentSelect_ord")
    public String todepartmentSelectord(){ return "departmentSelect_ord";}



    @ResponseBody
    @RequestMapping("/Administartor/changedept")
    public Response changeDept(String deptname,String deptremark)
    {
        Dept dept = deptDao.findByDeptid(cachedeptid);
        dept.setDeptname(deptname);
        dept.setDeptremark(deptremark);
        deptDao.save(dept);
        cachedeptid = 0;
        return new Response(1,"修改成功");
    }

    @ResponseBody
    @RequestMapping("/Administartor/adddept")
    public Response addDept(String deptname,String deptremark)
    {
        Dept dept = new Dept();
        dept.setDeptremark(deptremark);
        dept.setDeptname(deptname);
        deptDao.save(dept);
        return  new Response(1,"添加成功");
    }

    @RequestMapping("/Administartor/alldept")
    @ResponseBody
    public List<Dept> allDept()
    {
        List<Dept> deptList = deptDao.findAll();
        return deptList;
    }

    @RequestMapping("/Administartor/searchdept")
    @ResponseBody
    public List<Dept> searchDept(String deptname)
    {

        List<Dept> depts = deptDao.findByDeptname(deptname);
        return depts;
    }

    @RequestMapping("/Administartor/deletedept")
    @ResponseBody
    public Response deleteDept(Integer deptid)
    {
        deptDao.delete(deptDao.findByDeptid(deptid));
        return  new  Response(1,"删除成功");
    }

    @RequestMapping("/cachedeptid")
    @ResponseBody
    public Dept cachedept(Integer deptid){
        cachedeptid = deptid;
        Dept dept = deptDao.findByDeptid(deptid);
        return dept;
    }

    @RequestMapping("/returndeptid")
    @ResponseBody
    public Dept returndept(){
        Dept dept = deptDao.findByDeptid(cachedeptid);
        return dept;
    }
}
