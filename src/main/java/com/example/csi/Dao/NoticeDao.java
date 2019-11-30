package com.example.csi.Dao;

import com.example.csi.Entity.Notice;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface NoticeDao extends JpaRepository<Notice, Integer> {
    public Notice findByNoticeid(Integer noticeid);
    public List<Notice> findByNoticecontentLike(String content);
    public List<Notice> findByNoticetitleLike(String title);
}
