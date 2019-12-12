package com.postman.api.testdata;

import java.util.ArrayList;
import java.util.HashMap;

public class PayloadBuilder(){

    public PayloadBuilder(){}

    private ArrayList<HashMap<String, String>> alist = new ArrayLists<>();

    private String A;
    private String B;


    public PayloadBuilder setA(String a){
        this.A = a
        }

public PayloadBuilder setB(String b){
        this.B = b
        }

        public PayloadBuilder setAlist(){
        HashMap<String, String> payload = new HashMap<>();
        payload.put("A", this.a);
        payload.put("B", this.b);

        this.alist.add(payload);
        return this;
        }

        public HashMap<String, String>  build(){
        HashMap<String, String> payload = new HashMap<>();
        payload.put("alist", this.alist);
        return payload
        }


        }

//        HashMap<String, String> payload = new PayloadBuilder().setA().setB().setAlist().build();