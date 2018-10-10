package com.postman.api;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.*;

import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.http.ContentType;
import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.specification.ResponseSpecification;
import io.restassured.http.Method;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import io.restassured.response.Response;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

public class RequestMethodTest {



    @Before
    public void setUp() {
        baseURI= "https://postman-echo.com";

    }


    @Test
    public void getRequestTest()  {

                given()
                    .param("test", "123")
                .when()
                    .get("/get")
                .then()
                    .log().all()
                    .contentType(ContentType.JSON)
                    .assertThat()
                    .body("url", equalTo("https://postman-echo.com/get?test=123"))
                    .statusCode(200);
    }

    @Test
    public void getRequestTest1()  {


        Response resp = given()
                .param("test", "123")
                .when()
                .get("/get");
        String response = resp.asString();
        System.out.println(response);

    }

    @Test
    public void postRequestRawStringTest(){

        String bodyContent = "test body content";
        String bodyLength = Integer.toString(bodyContent.length());

        given().pathParam("method", "post")
                .header("Content-Type", "text/plain")
                .body(bodyContent)
                .when()
                .post("/{method}")
                .then()
                .log().all()
                .contentType(ContentType.JSON)
                .assertThat()
                .statusCode(200)
                .body("data", equalTo(bodyContent))
                .body("headers.content-length", equalTo(bodyLength));
    }


    @Test
    public void postRequestJsonAsMapTest(){
        Map<String, Object>  jsonAsMap = new HashMap<>();
        jsonAsMap.put("firstName", "John");
        jsonAsMap.put("lastName", "Doe");

        given()
                .contentType(ContentType.JSON)
                .body(jsonAsMap)
                .when()
                .post("/post")
                .then()
                .log().all()
                .contentType(ContentType.JSON)
                .assertThat()
                .statusCode(200)
                .body("json.firstName", equalTo("John"));

    }


    @Test
    public void postRequestMultiPartTest() {

        given()
                .multiPart(new File("/Users/diyu/workspace/java-demo/src/test/java/com/postman/api/filedata.txt"))
                .when()
                .post("/post")
                .then()
                .log().all()
                .contentType(ContentType.JSON)
                .assertThat()
                .statusCode(200);
    }

    @Test
    public void putRequestRawStringTest(){

        String bodyContent = "test body content";
        String bodyLength = Integer.toString(bodyContent.length());

        given().pathParam("method", "put")
                .header("Content-Type", "text/plain")
                .body(bodyContent)
                .when()
                .put("/{method}")
                .then()
                .log().all()
                .contentType(ContentType.JSON)
                .assertThat()
                .statusCode(200)
                .body("data", equalTo(bodyContent))
                .body("headers.content-length", equalTo(bodyLength));
    }



}
