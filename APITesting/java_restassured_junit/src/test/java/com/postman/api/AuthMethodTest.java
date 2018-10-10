package com.postman.api;

import io.restassured.builder.ResponseSpecBuilder;
import io.restassured.http.ContentType;
import io.restassured.specification.ResponseSpecification;
import org.junit.Before;
import org.junit.Test;

import static io.restassured.RestAssured.baseURI;
import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.equalTo;

public class AuthMethodTest {

    @Before
    public void setUp() {
        baseURI= "https://postman-echo.com";

    }

    @Test
    public void getBasicAuthTest(){

        ResponseSpecBuilder builder = new ResponseSpecBuilder();
        builder.expectStatusCode(200);
        builder.expectBody("authenticated", equalTo(true));
        ResponseSpecification responseSpec = builder.build();


        given().auth().preemptive().basic("postman", "password")
                .when()
                .get("/basic-auth")
                .then()
                .log().all()
                .contentType(ContentType.JSON)
                .spec(responseSpec);
    }
}
