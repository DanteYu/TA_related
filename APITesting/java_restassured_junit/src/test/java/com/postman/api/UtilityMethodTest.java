package com.postman.api;

import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.MatcherAssert.assertThat;
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

public class UtilityMethodTest {

    @Before
    public void setUp() {
        baseURI= "https://postman-echo.com";

    }

    @Test
    public void testResponseStatusCode(){
        String resp = given()
                        .when()
                .get("/status/200")
                .asString();

        assertThat(resp, equalTo("{\"status\":200}"));

    }

    @Test
    public void testDelayResponse(){
        String resp = given()
                .when()
                .get("/delay/3")
                .then()
                .assertThat()
                .statusCode(200)
                .extract().path("delay");

        assertThat(resp, equalTo("3"));
    }

    @Test
    public void testGZipCompressedResponse(){
        Response resp = given()
                .when()
                .get("/gzip")
                .then()
                .assertThat()
                .statusCode(200)
                .extract().response();

        assertThat(true, equalTo(resp.path("gzipped")));
        assertThat("gzip,deflate", equalTo(resp.path("headers.accept-encoding")));
        assertThat("gzip", equalTo(resp.getHeader("Content-Encoding")));
    }

    @Test
    public void testIP(){
        given()
                .when()
                .get("/ip")
                .then()
                .log().all()
                .assertThat()
                .statusCode(200)
                .body("ip", response -> equalTo(response.path("ip")));

    }



}
