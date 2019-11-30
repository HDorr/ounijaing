package com.example.csi.Entity;


import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.util.Date;


@Entity
@Table(name = "user_inf")
@EntityListeners(AuditingEntityListener.class)
public class User {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	//用户id
	private Integer userid;
	//登录用户名
	private String userloginname;
	//登录密码
	private String userpassword;
	//状态
	private Integer userstatus;

	@CreatedDate
	private Date usercreatedate;
	//真实名字
	private String userusername;
	//照片URL路径
	private String userfaceurl;
	//路径
	private String userfacepath;


	public User(String userloginname, String userpassword, Integer userstatus, Date usercreatedate, String userusername) {
		this.userloginname = userloginname;
		this.userpassword = userpassword;
		this.userstatus = userstatus;
		this.usercreatedate = usercreatedate;
		this.userusername = userusername;
	}

	public User() {
	}

	public Integer getUserid() {
		return userid;
	}

	public void setUserid(Integer userid) {
		this.userid = userid;
	}

	public String getUserloginname() {
		return userloginname;
	}

	public void setUserloginname(String userloginname) {
		this.userloginname = userloginname;
	}

	public String getUserpassword() {
		return userpassword;
	}

	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}

	public Integer getUserstatus() {
		return userstatus;
	}

	public void setUserstatus(Integer userstatus) {
		this.userstatus = userstatus;
	}

	public Date getUsercreatedate() {
		return usercreatedate;
	}

	public void setUsercreatedate(Date usercreatedate) {
		this.usercreatedate = usercreatedate;
	}

	public String getUserusername() {
		return userusername;
	}

	public void setUserusername(String userusername) {
		this.userusername = userusername;
	}

	public String getUserfaceurl() {
		return userfaceurl;
	}

	public void setUserfaceurl(String userfaceurl) {
		this.userfaceurl = userfaceurl;
	}

	public String getUserfacepath() {
		return userfacepath;
	}

	public void setUserfacepath(String userfacepath) {
		this.userfacepath = userfacepath;
	}

	
	
	
	

}
