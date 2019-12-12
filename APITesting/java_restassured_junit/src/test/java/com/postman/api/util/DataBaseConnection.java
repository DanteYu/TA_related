package com.postman.api.util;

import java.sql.*;

/**
 * Created by diyu on 2019/12/12.
 */
public class DataBaseConnection {


    public static Object connectDataBase() throws SQLException{
        try{
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        }
        catch (ClassNotFoundException e){
            e.printStackTrace();
        }

        try{
            Connection conn = DriverManager.getConnection("url", "username", "pwd");
            return conn;
        } catch (SQLException e){
            e.printStackTrace();
            throw  e;
        }
    }

    public static void executeUpdate(String statement) throws SQLException {
        DataBaseConnection connDB = new DataBaseConnection();
        Connection conn = (Connection) connDB.connectDataBase();
        Statement ps = conn.prepareStatement(statement);
        ((PreparedStatement) ps).executeUpdate();
        conn.close();
    }

    public static String executeQuery(String statement, String columnname) throws SQLException {
        String result = "";
        DataBaseConnection connDB = new DataBaseConnection();
        Connection conn = (Connection) connDB.connectDataBase();
        Statement ps = conn.prepareStatement(statement);
        ResultSet rs = ((PreparedStatement) ps).executeQuery();

        while(rs.next()){
            result = rs.getString(columnname);
        }


        conn.close();
        return result;
    }




}
