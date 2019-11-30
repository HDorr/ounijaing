package com.example.csi.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "dept_inf")
public class Dept {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer deptid;

	private String deptname;
	
	private String deptremark;

	public Integer getDeptid() {
		return deptid;
	}

	public void setDeptid(Integer deptid) {
		this.deptid = deptid;
	}

	public String getDeptname() {
		return deptname;
	}

	public void setDeptname(String deptname) {
		this.deptname = deptname;
	}

	public String getDeptremark() {
		return deptremark;
	}

	public void setDeptremark(String deptremark) {
		this.deptremark = deptremark;
	}

	
	
	
}
