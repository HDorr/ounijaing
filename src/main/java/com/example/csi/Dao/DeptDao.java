package com.example.csi.Dao;

import com.example.csi.Entity.Dept;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
public interface DeptDao extends JpaRepository<Dept, Integer> {
    public Dept findByDeptid(Integer id);
    public List<Dept> findByDeptname(String Deptname);
}
