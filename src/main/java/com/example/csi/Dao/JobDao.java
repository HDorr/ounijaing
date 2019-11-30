package com.example.csi.Dao;

import com.example.csi.Entity.Job;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface JobDao extends JpaRepository<Job, Integer> {
    public Job findByJobid(Integer id);
    public  List<Job> findByJobname(String jobname);
}
