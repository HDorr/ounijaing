package com.example.csi.Dao;

import com.example.csi.Entity.Emp;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmpDao extends JpaRepository<Emp, Integer> {
    public Emp findByEmpid (Integer empid);
    public List<Emp>findByDeptid (Integer deptid);
    public List<Emp> findByJobid(Integer jobid);
    public List<Emp> findByEmpsex(Integer sex);
    public List<Emp> findByEmpcardid(String cardid);
    public List<Emp> findByEmptel(String tel);
    public List<Emp> findByEmpname(String name);
    public List<Emp> findByEmpphone(String phone);
}
