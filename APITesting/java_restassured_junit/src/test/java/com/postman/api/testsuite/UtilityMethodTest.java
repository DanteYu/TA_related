package com.postman.api.testsuite;

import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;
import static org.hamcrest.MatcherAssert.assertThat;

import org.junit.Before;
import org.junit.Test;
import io.restassured.response.Response;

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
