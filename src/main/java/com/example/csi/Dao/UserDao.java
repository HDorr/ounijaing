package com.example.csi.Dao;


import com.example.csi.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


//@Repository
public interface UserDao extends JpaRepository<User, Integer> {
	public User findByUserloginname(String userloginname);
	public User findByUserid(Integer userid);
	public List<User> findByUserusername(String userusername);
	public List<User> findByUserstatus (Integer status);

}
