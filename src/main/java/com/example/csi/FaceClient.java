package com.example.csi;


import com.baidu.aip.face.AipFace;
import com.baidu.aip.face.MatchRequest;
import org.json.JSONObject;

import java.util.ArrayList;

public class FaceClient {
    private static volatile FaceClient faceClient;
    private AipFace client = null;
    private FaceClient(String APP_ID,String API_KEY,String SECRET_KEY)
    {
        client = new AipFace(APP_ID,API_KEY,SECRET_KEY);
    }
    public static FaceClient getInstance(String APP_ID,String API_KEY,String SECRET_KEY)
    {
        if(faceClient == null)
        {
            synchronized (FaceClient.class)
            {
                if (faceClient==null)
                {
                    faceClient = new FaceClient(APP_ID, API_KEY, SECRET_KEY);
                }
            }
        }
        return faceClient;
    }

    public boolean faceContrast(String image1,String image2)
    {
        //image1,image2为对应图片的url
        MatchRequest req1 = new MatchRequest(image1,"BASE64");
        MatchRequest req2 = new MatchRequest(image2,"BASE64");
        ArrayList<MatchRequest> requests = new ArrayList<MatchRequest>();
        requests.add(req1);
        requests.add(req2);

        JSONObject res = client.match(requests);
        System.out.println(res.toString());
        Object object = res.get("result");
        System.out.println("cccc=="+object);
        if (object==null || object.toString().equals("null"))
        {
            return  false;
        }
        else {
            res =(JSONObject) object;
            double result = res.getDouble("score");
            if(result>90)
            {
                return true;
            }
            else{
                return false;
            }
        }
    }




}
