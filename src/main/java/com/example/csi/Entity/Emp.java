package com.example.csi.Entity;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "emp_inf")
@EntityListeners(AuditingEntityListener.class)
public class Emp {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer empid;
	private Integer deptid;
	private Integer jobid;
	private String empname;
	private String empcardid;
	private String empaddress;
	private String emppostcode;
	private String emptel;
	private String empphone;
	private String empqqnum;
	private String empemail;
	private Integer empsex;
	private String empparty;
	private Date empbirthday;
	private String emprace;

	private String empeducation;
	private String empspeciality;
	private String emphobby;
	private String empremark;
	@CreatedDate
	private Date empcreatedate;


	public Integer getEmpid() {
		return empid;
	}
	public void setEmpid(Integer empid) {
		this.empid = empid;
	}
	public Integer getDeptid() {
		return deptid;
	}
	public void setDeptid(Integer deptid) {
		this.deptid = deptid;
	}
	public Integer getJobid() {
		return jobid;
	}
	public void setJobid(Integer jobid) {
		this.jobid = jobid;
	}
	public String getEmpname() {
		return empname;
	}
	public void setEmpname(String empname) {
		this.empname = empname;
	}
	public String getEmpcardid() {
		return empcardid;
	}
	public void setEmpcardid(String empcardid) {
		this.empcardid = empcardid;
	}
	public String getEmpaddress() {
		return empaddress;
	}
	public void setEmpaddress(String empaddress) {
		this.empaddress = empaddress;
	}
	public String getEmppostcode() {
		return emppostcode;
	}
	public void setEmppostcode(String emppostcode) {
		this.emppostcode = emppostcode;
	}
	public String getEmptel() {
		return emptel;
	}
	public void setEmptel(String emptel) {
		this.emptel = emptel;
	}
	public String getEmpphone() {
		return empphone;
	}
	public void setEmpphone(String empphone) {
		this.empphone = empphone;
	}
	public String getEmpqqnum() {
		return empqqnum;
	}
	public void setEmpqqnum(String empqqnum) {
		this.empqqnum = empqqnum;
	}
	public String getEmpemail() {
		return empemail;
	}
	public void setEmpemail(String empemail) {
		this.empemail = empemail;
	}
	public Integer getEmpsex() {
		return empsex;
	}
	public void setEmpsex(Integer empsex) {
		this.empsex = empsex;
	}
	public String getEmpparty() {
		return empparty;
	}
	public void setEmpparty(String empparty) {
		this.empparty = empparty;
	}
	public Date getEmpbirthday() {
		return empbirthday;
	}
	public void setEmpbirthday(Date empbirthday) {
		this.empbirthday = empbirthday;
	}
	public String getEmprace() {
		return emprace;
	}
	public void setEmprace(String emprace) {
		this.emprace = emprace;
	}
	public String getEmpeducation() {
		return empeducation;
	}
	public void setEmpeducation(String empeducation) {
		this.empeducation = empeducation;
	}
	public String getEmpspeciality() {
		return empspeciality;
	}
	public void setEmpspeciality(String empspeciality) {
		this.empspeciality = empspeciality;
	}
	public String getEmphobby() {
		return emphobby;
	}
	public void setEmphobby(String emphobby) {
		this.emphobby = emphobby;
	}
	public String getEmpremark() {
		return empremark;
	}
	public void setEmpremark(String empremark) {
		this.empremark = empremark;
	}

	public Date getEmpcreatedate() {
		return empcreatedate;
	}

	public void setEmpcreatedate(Date empcreatedate) {
		this.empcreatedate = empcreatedate;
	}
}


