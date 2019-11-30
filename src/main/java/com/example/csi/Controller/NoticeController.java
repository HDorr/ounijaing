package com.example.csi.Controller;


import com.example.csi.Dao.NoticeDao;
import com.example.csi.Entity.Notice;
import com.example.csi.Entity.User;
import com.example.csi.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
public class NoticeController {
    @Autowired
    NoticeDao noticeDao;
    private Integer cachenoticecid = 0;

    @RequestMapping("/tonoticeSelect")
    public String tonoticeSelect(){
        return "/noticeSelect";
    }

    @RequestMapping("/toaddNotice")
    public String toaddNotice(){
        return "/addNotice";
    }

    @RequestMapping("/totransNotice")
    public String totransNotice(){
        return "/transNotice";
    }

    @RequestMapping("/tonoticeSelect_ord")
    public String tonoticeselectord(){
        return "/noticeSelect_ord";
    }

    @RequestMapping("/cachenoticeid")
    @ResponseBody
    public Notice cachenoticeid(Integer noticeid){
        Notice notice = noticeDao.findByNoticeid(noticeid);
        cachenoticecid = noticeid;
        return notice;
    }

    @RequestMapping("/returnnoticeid")
    @ResponseBody
    public Notice returnnoticeid(){
        Notice notice = noticeDao.findByNoticeid(cachenoticecid);
        return notice;
    }


    @ResponseBody
    @RequestMapping("/Administartor/changenotice")
    public Response changeNotice(String title,String content)
    {
        Notice notice = noticeDao.findByNoticeid(cachenoticecid);
        notice.setNoticetitle(title);
        notice.setNoticecontent(content);
        noticeDao.save(notice);
        cachenoticecid = 0;
        return new Response(1,"修改成功");
    }

    @ResponseBody
    @RequestMapping("/Administartor/addnotice")
    public Response addNotice(String title, String content, HttpSession session)
    {
        Notice notice = new Notice();
        User user = (User) session.getAttribute("user");
        notice.setNoticetitle(title);
        notice.setNoticecontent(content);
        notice.setNoticeuserid(user.getUserid());

        noticeDao.save(notice);
        return new Response(1,"添加成功");
    }

    @ResponseBody
    @RequestMapping("/Adminstrater/allnotice")
    public List<Notice> allNotice()
    {
        List<Notice> noticelist = noticeDao.findAll();
        return  noticelist;
    }

    @ResponseBody
    @RequestMapping("/Adminstrater/searchnotice")
    public List<Notice> searchNotice(String title ,String content)
    {
        List<Notice> list1,list2;
        if(!content.equals(""))
        {
            list1 = noticeDao.findByNoticecontentLike(content);
        }
        else
        {
            list1 = null;
        }
        if(!title.equals(""))
        {
            list2 = noticeDao.findByNoticetitleLike(title);
        }
        else
        {
            list2 = null;
        }
        if(list1!=null && list2!=null)
        {
            list1.retainAll(list2);
        }
        else if (list1 == null && list2!=null)
        {
            list1 = list2;
        }

        List<Notice> list = list1;
        return  list;
    }

    @RequestMapping("/Administartor/deletenotice")
    @ResponseBody
    public Response delete(Integer noticeid)
    {
        noticeDao.delete(noticeDao.findByNoticeid(noticeid));
        return new Response(1,"删除成功");
    }

    @RequestMapping("/Administartor/yulannotice")
    @ResponseBody
    public Notice yulan(Integer noticeid){
        Notice notice = noticeDao.findByNoticeid(noticeid);
        return notice;
    }



}
