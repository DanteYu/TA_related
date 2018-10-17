package com.postman.api.testsuite;

import static io.restassured.RestAssured.*;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.*;
import static io.restassured.module.jsv.JsonSchemaValidator.matchesJsonSchemaInClasspath;
import io.restassured.response.Response;

import org.junit.Before;
import org.junit.Test;


public class CookiesMethodTest {

    @Before
    public void setUp() {
        baseURI= "https://postman-echo.com";

    }

    @Test
    public void testSetCookies(){
        String foo1 = "bar1";
        String foo2 = "bar2";

        Response resp = given()
                .header("cookie", "sails.sid=s%3AC7LPmHdvPolnWFNI1ONKl4FIZJW_4Pnt.zGTxOXSa8qBVGw0Eyq2s5fYVrUor9dS4jRTsgRqnDQM; foo1=bar1; foo2=bar2")
                .param("foo1", "bar1")
                .param("foo2", "bar2")
                .when()
                .get("/cookies/set")
                .then()
                .log().all()
                .assertThat()
                .statusCode(200)
                .body(matchesJsonSchemaInClasspath("set_cookies_schema.json"))
                .extract()
                .response();

        assertThat(foo1, equalTo(resp.path("cookies.foo1")));
        assertThat(foo2, equalTo(resp.path("cookies.foo2")));

    }

    @Test
    public void testGetCookies(){
        String foo1 = "bar1";

        String resp = given()
                .header("cookie", "sails.sid=s%3AC7LPmHdvPolnWFNI1ONKl4FIZJW_4Pnt.zGTxOXSa8qBVGw0Eyq2s5fYVrUor9dS4jRTsgRqnDQM; foo1=bar1; foo2=bar2")
                .when()
                .get("/cookies")
                .then()
                .log().all()
                .assertThat()
                .statusCode(200)
                .extract()
                .path("cookies.foo1");

        assertThat(foo1, equalTo(resp));

    }

}
