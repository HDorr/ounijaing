package com.example.csi.Entity;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

import javax.persistence.*;

@Entity
@Table(name = "notice_inf")
@EntityListeners(AuditingEntityListener.class)
public class Notice {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer noticeid;
	private String noticetitle;
	private String noticecontent;

	@CreatedDate
	private Date noticecreatedate;

	private Integer noticeuserid;
	
	public Integer getNoticeid() {
		return noticeid;
	}
	public void setNoticeid(Integer noticeid) {
		this.noticeid = noticeid;
	}
	public String getNoticetitle() {
		return noticetitle;
	}
	public void setNoticetitle(String noticetitle) {
		this.noticetitle = noticetitle;
	}
	public String getNoticecontent() {
		return noticecontent;
	}
	public void setNoticecontent(String noticecontent) {
		this.noticecontent = noticecontent;
	}
	public Date getNoticecreatedate() {
		return noticecreatedate;
	}
	public void setNoticecreatedate(Date noticecreatedate) {
		this.noticecreatedate = noticecreatedate;
	}
	public Integer getNoticeuserid() {
		return noticeuserid;
	}
	public void setNoticeuserid(Integer noticeuserid) {
		this.noticeuserid = noticeuserid;
	}
	

}
