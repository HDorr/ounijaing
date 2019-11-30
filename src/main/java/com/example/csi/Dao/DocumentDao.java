package com.example.csi.Dao;

import com.example.csi.Entity.Document;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentDao extends JpaRepository<Document, Integer> {
    public Document findByDocumentid(Integer documentid);
    public List<Document> findByDocumenttitleLike(String title);
}
