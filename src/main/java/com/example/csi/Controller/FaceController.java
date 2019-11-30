package com.example.csi.Controller;

import com.example.csi.Dao.UserDao;
import com.example.csi.Entity.User;
import com.example.csi.FaceClient;
import com.example.csi.Response.Response;

import java.io.*;
import java.util.Base64;
import java.util.Base64.Decoder;
import java.util.List;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;


import javax.servlet.http.HttpSession;
import javax.swing.*;

@Controller
public class FaceController {
    @Autowired
    UserDao userDao;

    @RequestMapping("/tofaceLogin")

    public String toFacelogin()
    {
        return ("face_login");
    }
    @RequestMapping("/tofaceRegist")
    public String toFaceregist()
    {
        return ("face_regist");
    }


    @RequestMapping("/faceRegist")
    @ResponseBody
    public Response faceRegister(@RequestParam("base") String base, HttpSession session) { // 对字节数组字符串进行Base64解码并生成图片
        System.out.println(base);
        if (base == null) // 图像数据为空
            return new Response(0,"注册失败");
        Decoder decoder = Base64.getDecoder();
        User user = (User)session.getAttribute("user");
        try {
            // Base64解码
            byte[] b = decoder.decode(base);
            for (int i = 0; i < b.length; ++i) {
                if (b[i] < 0) {// 调整异常数据
                    b[i] += 256;
                }
            }
            // 生成jpeg图片
            String imgFilePath = "C:\\ideaproject\\csi\\src\\main\\resources\\face\\"+user.getUserloginname()+".png";// 新生成的图片
            File file = new File(imgFilePath);
            OutputStream out = new FileOutputStream(file);
            out.write(b);
            out.flush();
            out.close();
            user.setUserfacepath(imgFilePath);
            userDao.save(user);

            return new Response(1,"注册成功");
        } catch (Exception e) {
            return new Response(0,"注册失败");
        }
    }

    @RequestMapping("/faceLogin")
    @ResponseBody
    public Response faceLogin(String base,HttpSession session)
    {
        Response response = new Response(0,"登录失败");
        List<User> list = userDao.findAll();
        for(int i=0;i<list.size();i++)
        {
            User user = list.get(i);
            if(user.getUserfacepath()!=null &&(!user.getUserfacepath().trim().equals("")))
            {
                String base1 = this.getImageStr(user.getUserfacepath());
                FaceClient faceClient = FaceClient.getInstance("17229373","7MGGQR3ru0Ohngb1qPfwbBYp","WVqTid8Qc2mtcuQRYep8Fgg7OLStfUQg");
                boolean loginBool = faceClient.faceContrast(base1, base);
                if(loginBool)
                {
                    session.setAttribute("user",user);
                    response = new Response(1,"登录成功");
                    break;
                }
            }
        }
        return response;
    }

    public String  getImageStr(String imgFile)
    {
        InputStream in = null;
        byte[] data = null;
        try{
            in = new FileInputStream(imgFile);
            data = new  byte[in.available()];
            in.read(data);
            in.close();
        }
        catch (IOException e)
        {
            e.printStackTrace();
        }
        Base64.Encoder encoder = Base64.getEncoder();
        String result = encoder.encodeToString(data);
        return result;
    }




}
