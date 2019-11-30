package com.example.csi.Entity;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.util.Date;

import javax.persistence.*;

@Entity
@EntityListeners(AuditingEntityListener.class)
@Table(name = "document_inf")
public class Document {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer documentid;
    private String documenttitle;
    private String documentfilename;
    private String documentremark;
    @CreatedDate
    private Date documentcreate_date;
    private Integer documentuserid;
    public Integer getDocumentid() {
        return documentid;
    }
    public void setDocumentid(Integer documentid) {
        this.documentid = documentid;
    }
    public String getDocumenttitle() {
        return documenttitle;
    }
    public void setDocumenttitle(String documenttitle) {
        this.documenttitle = documenttitle;
    }
    public String getDocumentfilename() {
        return documentfilename;
    }
    public void setDocumentfilename(String documentfilename) {
        this.documentfilename = documentfilename;
    }
    public String getDocumentremark() {
        return documentremark;
    }
    public void setDocumentremark(String documentremark) {
        this.documentremark = documentremark;
    }
    public Date getDocumentcreate_date() {
        return documentcreate_date;
    }
    public void setDocumentcreate_date(Date documentcreate_date) {
        this.documentcreate_date = documentcreate_date;
    }
    public Integer getDocumentuserid() {
        return documentuserid;
    }
    public void setDocumentuserid(Integer documentuserid) {
        this.documentuserid = documentuserid;
    }


}

