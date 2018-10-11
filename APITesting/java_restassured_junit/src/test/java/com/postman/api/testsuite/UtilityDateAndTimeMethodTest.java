package com.postman.api.testsuite;

import static io.restassured.RestAssured.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;

import org.junit.Before;
import org.junit.Test;

public class UtilityDateAndTimeMethodTest {

    @Before
    public void setUp() {
        baseURI= "https://postman-echo.com";

    }

    @Test
    public void testTimeStampValidity(){
        given()
                .param("timestamp", "2016-10-10")
                .when()
                .get("/time/valid")
                .then()
                .log().all()
                .assertThat()
                .statusCode(200)
                .body(matchesJsonSchemaInClasspath("timestamp_schema.json"));
    }

    @Test
    public void testTimeStampFormat(){
        given()
                .param("timestamp", "2016-10-10")
                .param("format", "mm")
                .when()
                .get("/time/format")
                .then()
                .log().all()
                .assertThat()
                .statusCode(200)
                .body(matchesJsonSchemaInClasspath("timestamp_format_schema.json"));
    }


}
