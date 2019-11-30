package com.example.csi.Controller;

import com.example.csi.Dao.UserDao;
import com.example.csi.Entity.User;
import com.example.csi.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.servlet.http.HttpSession;

@Controller
public class UserController {

    @Autowired
    private UserDao uDao;

    private Integer cacheUser = 0;

    @RequestMapping("/")
    public String index()
    {
        return "login";
    }

    @RequestMapping("/commonUser")
    public String commonUser(){return "index_ord";}

    @RequestMapping("/Adminstrater")
    public String Adminstrater(){return "index";}

    @RequestMapping("/topage")
    public String toPage(){return "page2";}

    @RequestMapping("/totransUser")
    public String totransUser(){return "transUser";}

    @RequestMapping("/touserSelect")
    public String touserSelect(){
        return "userSelect";
    }

    @RequestMapping("/toaddUser")
    public String toaddUser(){
        return "addUser";
    }

    @RequestMapping("/touserSelect_ord")
    public String touserSelectord(){ return "userSelect_ord"; }

    @RequestMapping("/username")
    @ResponseBody
    public User username(HttpSession session)
    {
        User user = (User) session.getAttribute("user");
        return user;
    }

    @ResponseBody
    @RequestMapping("/login")
    public Response login(String username, String password, HttpSession session)
    {
        User user = uDao.findByUserloginname(username);


        if(user==null)
        {
            return new Response(1,"用户名错误");

        }
        else {
            if(!(user.getUserpassword().equals(password)))
            {
                return new Response(1,"密码错误");
            }
            else {
                session.setAttribute("user",user);
                if(user.getUserstatus()!=1)
                {
                    return new Response(2,"普通用户登录成功");
                }
                else
                {
                    return  new Response(3,"管理员登录成功");
                }
            }
        }
    }


    @ResponseBody
    @RequestMapping("/changePassword")
    public Response changePassword(String password1,String password3,HttpSession session)
    {
        User user = (User) session.getAttribute("user");
        if(!(password3.equals(user.getUserpassword())))
        {
            return  new Response(0,"原密码错误");
    }
        else
        {
            user.setUserpassword(password1);
            uDao.save(user);
            return  new Response(1,"修改成功");
        }
    }

    @ResponseBody
    @RequestMapping("/Adminstrater/addUser")
    public  Response addUser(String username,String loginname,String password,String statusStr)
    {
        User user = new User();
        user.setUserloginname(loginname);
        user.setUserpassword(password);
        Integer status;
        if(statusStr.equals("管理员"))
        {
            status = 1;
        }
        else
        {
            status = 0;
        }
        user.setUserstatus(status);
        user.setUserusername(username);
        uDao.save(user);
        return new Response(1,"增加成功");
    }


    @ResponseBody
    @RequestMapping("/Adminstrater/changeUser")
    public Response changeUser(String username,String loginname,String statusStr)
    {
        Integer status;
        User user = uDao.findByUserid(cacheUser);
        if(statusStr.equals("管理员"))
        {
            status = 1;
        }
        else
        {
            status = 2;
        }
        user.setUserstatus(status);
        user.setUserusername(username);
        user.setUserloginname(loginname);
        uDao.save(user);
        cacheUser = 0;
        return new Response(1,"修改成功");
    }


    @ResponseBody
    @RequestMapping("/Adminstrater/allUser")
    public List<User> showAllUser()
    {
        List<User> userList = uDao.findAll();

        return  userList;
    }

    @ResponseBody
    @RequestMapping("/Adminstrater/searchUser")
    public List<User> searchUser(String searchname,String statusStr)
    {
        List<User> list1,list2,userList;
        Integer status;
        if(!statusStr.equals(""))
        {
            if(statusStr.equals("管理员"))
            {
                status = 1;
            }
            else
            {
                status = 2;
            }
            list1 = uDao.findByUserstatus(status);
        }
        else
        {
            list1 = null;
        }

        if(!searchname.equals(""))
        {
            list2 = uDao.findByUserusername(searchname);
        }
        else
        {
            list2 = null;
        }

        if(list1!=null && list2 !=null)
        {
            list1.retainAll(list2);
            userList = list1;
        }
        else if(list1 ==null && list2 != null)
        {
            userList = list2;
        }
        else if(list1 !=null && list2 == null)
        {
            userList = list1;
        }
        else {
            userList =null;
        }
        return  userList;


    }

    @RequestMapping("/Adminstrater/quite")
    public String quite(HttpSession session)
    {
        session.removeAttribute("user");
        return "login";
    }

    @ResponseBody
    @RequestMapping("/page")
    public List<User> page(){
        Date now = new Date();
        User user1 = new User("1","1",1,now,"1");
        user1.setUserid(100);
        User user2 = new User("2","2",1,now,"2");
        user2.setUserid(101);
        User user3 = new User("3","3",1,now,"3");
        user3.setUserid(102);
        User user4 = new User("4","4",1,now,"4");
        user4.setUserid(103);
        User user5 = new User("5","5",1,now,"5");
        user5.setUserid(104);
        User user6 = new User("6","6",1,now,"6");
        user6.setUserid(105);
        User user7 = new User("7","7",1,now,"7");
        user7.setUserid(106);
        User user8 = new User("8","8",1,now,"8");
        user8.setUserid(107);
        List<User> users = new ArrayList<User>();
        users.add(user1);
        users.add(user2);
        users.add(user3);
        users.add(user4);
        users.add(user5);
        users.add(user6);
        users.add(user7);
        users.add(user8);
        return users;

    }

    @RequestMapping("/cacheuserid")
    @ResponseBody
    public User findbyuserid(Integer userid){
        User user = uDao.findByUserid(userid);
        cacheUser = user.getUserid();
        return user;
    }

    @RequestMapping("/returnuserid")
    @ResponseBody
    public User returnuserid(){
        User user = uDao.findByUserid(cacheUser);
        return user;
    }

    @ResponseBody
    @RequestMapping("/Adminstrater/deleteuser")
    public Response deleteUser(Integer userid)
    {
        uDao.delete(uDao.findByUserid(userid));
        return new Response(1,"删除成功");
    }





}

