package com.EmployeeApp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;



public class UserDAO {
	
	
	private Connection connection=DBUtils.getConnection();
	
	public UserDAO()
	{
		System.out.println("in user dao");
	}
	
	public int authenticate(String username,String password)
	{
		int status=0;
		try
		{
		PreparedStatement ps=connection.prepareStatement("select * from user where username=? and userPassword=?");
		ps.setString(1,username);
		ps.setString(2,password);
		ResultSet rs=ps.executeQuery();
		if(rs.next())
		{
			status=1;
		}
		
		
		
		}catch(SQLException se)
		{
			System.out.println("unable to authenticate user...");
			se.printStackTrace();
		}
		return status;
	}
	
	
	

}
