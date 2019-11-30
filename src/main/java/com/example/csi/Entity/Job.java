package com.example.csi.Entity;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "job_inf")
public class Job {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer jobid;

	private String jobname;
	
	private String jobremark;

	public Integer getJobid() {
		return jobid;
	}

	public void setJobid(Integer jobid) {
		this.jobid = jobid;
	}

	public String getJobname() {
		return jobname;
	}

	public void setJobname(String jobname) {
		this.jobname = jobname;
	}

	public String getJobremark() {
		return jobremark;
	}

	public void setJobremark(String jobremark) {
		this.jobremark = jobremark;
	}

	
	
}
