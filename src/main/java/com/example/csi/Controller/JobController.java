package com.example.csi.Controller;


import com.example.csi.Dao.JobDao;
import com.example.csi.Entity.Job;
import com.example.csi.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
public class JobController {
    @Autowired
    private JobDao jobDao;

    private Integer cachejobid = 0;

    @RequestMapping("/tojobSelect")
    public String tojobSelect(){return "jobSelect";}

    @RequestMapping("/toaddJob")
    public String toaddJob(){return "addJob";}

    @RequestMapping("/totransJob")
    public String totransJob(){
        return "transJob";
    }

    @RequestMapping("/tojobSelect_ord")
    public String tojobselectord(){
        return "/jobSelect_ord";
    }

    @RequestMapping("/cachejobid")
    @ResponseBody
    public Job cacheJobid(Integer jobid){
        cachejobid = jobid;
        Job job = jobDao.findByJobid(jobid);
        return job;
    }

    @RequestMapping("/returnjobid")
    @ResponseBody
    public Job returnJobid(){
        Job job= jobDao.findByJobid(cachejobid);
        return job;
    }

    @ResponseBody
    @RequestMapping("/Administartor/changejob")
    public Response changeJob(String jobname,String jobremark)
    {

        Job job = jobDao.findByJobid(cachejobid);
        job.setJobname(jobname);
        job.setJobremark(jobremark);
        jobDao.save(job);
        cachejobid = 0;
        return new Response(1,"修改成功");
    }

    @ResponseBody
    @RequestMapping("/Administartor/addjob")
    public  Response addJob(String jobname,String jobremark)
    {
        Job job = new Job();
        job.setJobremark(jobremark);
        job.setJobname(jobname);
        jobDao.save(job);
        return new Response(1,"修改成功");
    }

    @ResponseBody
    @RequestMapping("/Administartor/alljob")
    public List<Job> allJob()
    {
        List<Job> jobList = jobDao.findAll();
        return jobList;
    }

    @ResponseBody
    @RequestMapping("/Administartor/searchjob")
    public List<Job> searchJob(String jobname)
    {

        List<Job> jobs = jobDao.findByJobname(jobname);

       return jobs;
    }

    @ResponseBody
    @RequestMapping("/Administartor/deletejob")
    public Response deleteJob(Integer jobid)
    {

        jobDao.delete(jobDao.findByJobid(jobid));
        return  new Response(1,"删除成功");
    }

}
