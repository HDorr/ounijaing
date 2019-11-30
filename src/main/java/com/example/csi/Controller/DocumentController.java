package com.example.csi.Controller;

import com.example.csi.Dao.DocumentDao;
import com.example.csi.Entity.Document;
import com.example.csi.Entity.User;
import com.example.csi.Response.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Controller
public class DocumentController {

    @Autowired
    DocumentDao documentDao;

    private Integer cachedocumentid = 0;

    @RequestMapping("/downloadtest")
    public String downloadtest(){
        return "/downloadtest";
    }

    @RequestMapping("/cachedocumentid")
    @ResponseBody
    public Document cachedocumentid(Integer documentid){
        Document document = documentDao.findByDocumentid(documentid);
        cachedocumentid = documentid;
        return document;
    }

    @RequestMapping("/returndocumentid")
    @ResponseBody
    public Document returndocumentid(){
        Document document = documentDao.findByDocumentid(cachedocumentid);
        return document;
    }

    @RequestMapping("/touploadDocument")
    public String touploadDocument(){
        return ("/uploadDocument");
    }

    @RequestMapping("/totransDocument")
    public String totransDocument(){
        return ("/transDocument");
    }

    @RequestMapping("/todocumentSelect")
    public String todocumentSelect(){
        return ("/documentSelect");
    }

    @RequestMapping("/todocumentSelect_ord")
    public String todocumentSelectord(){ return "/documentSelect_ord";}

    @ResponseBody
    @RequestMapping("/Administartor/adddocument")
    public Response upload(MultipartFile file, String filetitle, String fileremark, HttpSession session)
    {

        String FILE_DIR = "C:\\ideaproject\\csi\\src\\main\\resources\\static\\file\\";
        if(file.isEmpty()){
            return new Response(0,"文件为空，上传失败");
        }
        try{
            //获得文件的字节流
            byte[] bytes=file.getBytes();
            //获得path对象，也即是文件保存的路径对象
            Path path= Paths.get(FILE_DIR+file.getOriginalFilename());
            //调用静态方法完成将文件写入到目标路径
            Files.write(path,bytes);
            Document document = new Document();
            document.setDocumentfilename(file.getOriginalFilename());
            document.setDocumenttitle(filetitle);
            document.setDocumentremark(fileremark);
            User user = (User)session.getAttribute("user");
            document.setDocumentuserid(user.getUserid());
            documentDao.save(document);
            return  new Response(1,"上传成功");

        }catch (IOException e){
            e.printStackTrace();
        }

        return new Response(0,"未知异常");


    }

    @ResponseBody
    @RequestMapping("/Administartor/downloaddocument")
    public Response download(String filename,String filetitle, HttpServletResponse response)
    {
        File file=new File("\\static\\file\\bd.png");
        System.out.println(file);
        if(file.exists()){
            //首先设置响应的内容格式是force-download，那么你一旦点击下载按钮就会自动下载文件了
            response.setContentType("application/force-download");
            //通过设置头信息给文件命名，也即是，在前端，文件流被接受完还原成原文件的时候会以你传递的文件名来命名
            response.addHeader("Content-Disposition",String.format("attachment; filename=\"%s\"", file.getName()));
            //进行读写操作
            byte[]buffer=new byte[1024];
            FileInputStream fis=null;
            BufferedInputStream bis=null;
            try{
                fis=new FileInputStream(file);
                bis=new BufferedInputStream(fis);
                OutputStream os=response.getOutputStream();
                //从源文件中读
                int i=bis.read(buffer);
                while(i!=-1){
                    //写到response的输出流中
                    os.write(buffer,0,i);
                    i=bis.read(buffer);
                }
                return new Response(1,"下载成功");
            }catch (IOException e){
                e.printStackTrace();
            }finally {
                //善后工作，关闭各种流
                try {
                    if(bis!=null){
                        bis.close();
                    }
                    if(fis!=null){
                        fis.close();
                    }
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }

        }
        return  new Response(0,"下载失败");

    }

    @ResponseBody
    @RequestMapping("/Adminstrater/changedocument")
    public Response changeDocument(String title,String remark)
    {
        Document document = documentDao.findByDocumentid(cachedocumentid);
        document.setDocumentremark(remark);
        document.setDocumenttitle(title);
        documentDao.save(document);
        cachedocumentid = 0;
        return new Response(1,"修改成功");
    }

    @RequestMapping("/Adminstrater/alldocument")
    @ResponseBody
    public List<Document> allDocument()
    {
        List<Document> documentList = documentDao.findAll();
        return  documentList;
    }

    @ResponseBody
    @RequestMapping("/Adminstrater/searchdocument")
    public List<Document> searchDocument(String title)
    {
        List<Document> list = documentDao.findByDocumenttitleLike("%"+title+"");
        return list;

    }

    @RequestMapping("/Administartor/delectdocument")
    @ResponseBody
    public Response deleteDocument(Integer documentid)
    {
        Document document = documentDao.findByDocumentid(documentid);
        File file = new File("C:\\ideaproject\\csi\\src\\main\\resources\\static\\file\\"+document.getDocumentfilename());
        file.delete();
        documentDao.delete(document);
        return new Response(1,"删除成功");
    }





}

