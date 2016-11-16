package com.EmployeeApp.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import com.EmployeeApp.model.Employee;
import com.EmployeeApp.model.EmployeeJson;
import com.EmployeeApp.model.EmployeeType;
import com.EmployeeApp.model.EmployeeVO;
import com.EmployeeApp.dao.DBUtils;

public class EmployeeDAO {
	
	
	private Connection connection=DBUtils.getConnection();
	
	public EmployeeDAO()
	{
		System.out.println("aaa");
	}
	
	
	public int deleteEmployeeById(int id)
	{
		int status=0;
		try
		{
			PreparedStatement ps=connection.prepareStatement("delete from employee_type_detail where employee_id=?");
			ps.setInt(1, id);
			ps.executeUpdate();
			ps=connection.prepareStatement("delete from employee where id=?");
			ps.setInt(1, id);
			status=ps.executeUpdate();
			
		}catch(Exception e)
		{
			System.out.println("unable to delete employees");
			e.printStackTrace();
		}
		return status;
	}
	
	
	public int addEmployee(Employee employee)
	{
	      
		int status=0;
		try{
			
			PreparedStatement ps=connection.prepareStatement("insert into employee(name,start_date,end_date,description,salary,address,city,state,country) values(?,?,?,?,?,?,?,?,?)");
			ps.setString(1, employee.getName());
			ps.setDate(2, new java.sql.Date(employee.getStartDate().getTime()));
			ps.setDate(3, new java.sql.Date(employee.getEndDate().getTime()));
			ps.setString(4, employee.getDescription());
			ps.setDouble(5, employee.getSalary());
			ps.setString(6, employee.getAddress());
			ps.setString(7,employee.getCity());
			ps.setString(8, employee.getState());
			ps.setString(9,employee.getCountry());
			
			status=ps.executeUpdate();
			
		 
			
			
			
		}catch(SQLException se)
		{
			System.out.println("Unable to add...");
			se.printStackTrace();
		}
		return status;
	}
	
	public int getCurrentEmployeeId(String name)
	{
		int id=-1;
		try
		{
			PreparedStatement ps=connection.prepareStatement("select id from employee where name=?");
			ps.setString(1, name);
			ResultSet rs=ps.executeQuery();
			while(rs.next())
			{
				id=rs.getInt("id");
			}
			
		}catch(Exception e)
		{
			System.out.println("unable to get current employee");
			e.printStackTrace();
		}
		return id;
	}
	
	public List<EmployeeVO> getEmployeeByType(int employeeTypeId,int start,int limit)
	{
		System.out.println("-------------------------------------------------------------");

		System.out.println(employeeTypeId);
		
		List<EmployeeVO> employees=new ArrayList<EmployeeVO>();
		
		boolean isFound=false;
		
		try{
			
			PreparedStatement ps;
			if(employeeTypeId==4)
			{
				ps=connection.prepareStatement("select employee.id as id, name , start_date as startDate, end_Date as endDate, type_name as type, salary, address, city, state, country from employee,employee_type,employee_type_detail where employee.id=employee_type_detail.employee_id and employee_type.id=employee_type_detail.type_id limit ?,?");
				ps.setInt(1, start);
				ps.setInt(2, limit);
			}
			else{
		ps=connection.prepareStatement("select employee.id as id, name , start_date as startDate, end_Date as endDate, type_name as type, salary, address, city, state, country from employee,employee_type,employee_type_detail where employee.id=employee_type_detail.employee_id and employee_type.id=employee_type_detail.type_id and  employee_type.id=? limit ?,?");
		ps.setInt(1, employeeTypeId);
		ps.setInt(2,start);
		ps.setInt(3, limit);
				}
			
			
			ResultSet rs=ps.executeQuery();
			
			while(rs.next())
			{
				isFound=false;
				EmployeeVO employeeVO=new EmployeeVO();
				employeeVO.setId(rs.getInt("id"));
				employeeVO.setName(rs.getString("name"));
				employeeVO.setStartDate(rs.getDate("startDate"));
				employeeVO.setEndDate(rs.getDate("endDate"));
				employeeVO.setType(rs.getString("type"));
				employeeVO.setSalary(rs.getDouble("salary"));
				employeeVO.setAddress(rs.getString("address"));
				employeeVO.setCity(rs.getString("city"));
				employeeVO.setState(rs.getString("state"));
				employeeVO.setCountry(rs.getString("country"));
				
				employees.add(employeeVO);
				
				/*if(employees.size()!=0)
				{
					
					for(EmployeeVO e:employees)
					{
						if(e.getId()==rs.getInt("id"))
						{
							e.getDepartmentList().add(rs.getString("departmentName"));
							isFound=true;
							break;
						}
						
					}
					
					
					
				}
				
					if(!isFound)
					{
						
					employeeVO.getDepartmentList().add(rs.getString("departmentName"));
					employees.add(employeeVO);
					}*/
					
				
			}
			
			
			
		}catch(SQLException se)
		{
			System.out.println("unable to fetch...");
			se.printStackTrace();
		}
		
		return employees;
		
	}
	
	
	public int getEmployeeCount(int employeeTypeId)
	{
		int count=0;
		try{
			
		PreparedStatement ps;
		
		if(employeeTypeId==4)
		{
		 ps=connection.prepareStatement("select count(*) from employee,employee_type,employee_type_detail where employee.id=employee_type_detail.employee_id and employee_type.id=employee_type_detail.type_id");
		
		 ResultSet rs=ps.executeQuery();
		 while(rs.next())
		 {
			 count=rs.getInt(1);
		 }
		 
		}
		
		else
		{
			ps=connection.prepareStatement("select count(*) from employee,employee_type,employee_type_detail where employee.id=employee_type_detail.employee_id and employee_type.id=employee_type_detail.type_id and employee_type.id=?");
			ps.setInt(1, employeeTypeId);
			ResultSet rs=ps.executeQuery();
			 while(rs.next())
			 {
				 count=rs.getInt(1);
			 }
		
		}
	}catch(SQLException se)
		{
		System.out.println("Unable to fetch count...");
		se.printStackTrace();
		}
		
		return count;
	}
	
	
	public List<EmployeeType> getListTypes()
	{
		List<EmployeeType> listTypes=new ArrayList<EmployeeType>();
		
		try{
			
			PreparedStatement ps;
			ps=connection.prepareStatement("select * from employee_type");
			ResultSet rs=ps.executeQuery();
			while(rs.next())
			{
				
				EmployeeType employeeType=new EmployeeType();
				employeeType.setId(rs.getInt("id"));
				employeeType.setTypeName(rs.getString("type_name"));
				listTypes.add(employeeType);
			}
			
			
		}catch(SQLException se)
		{
			System.out.println("Unable to get list types...");
			se.printStackTrace();
		}
		
		
		
		
		return listTypes;
	}
	
	public void addType(int id,int type)
	{
		try
		{
			PreparedStatement ps=connection.prepareStatement("insert into employee_type_detail(employee_id,type_id)values(?,?)");
			ps.setInt(1,id);
			ps.setInt(2, type);
			ps.executeUpdate();
			
			
		}catch(Exception e)
		{
			System.out.println("unable to add type...");
			e.printStackTrace();
			
				
		}
	}
 
    public int updateEmployee(EmployeeJson employeeJson)
   { 
    	
    	DateFormat df=new SimpleDateFormat("MM/dd/YYYY");
    	int type=-1;
    	int count=-2;
    	int status;
	 try
	 {
		 PreparedStatement ps= connection.prepareStatement("update employee set name=?,start_date=?,end_date=?,description=?,salary=?,address=?,city=?,state=?,country=? where id=?");
		    ps.setString(1, employeeJson.getName());
		    System.out.println("in dao2");
		    System.out.println(df.parse(employeeJson.getStartDate()));
			ps.setDate(2, new java.sql.Date(df.parse(employeeJson.getStartDate()).getTime()));
			System.out.println("in dao3");
			ps.setDate(3, new java.sql.Date(df.parse(employeeJson.getEndDate()).getTime()));
			ps.setString(4, employeeJson.getDescription());
			ps.setDouble(5, employeeJson.getSalary());
			ps.setString(6, employeeJson.getAddress());
			ps.setString(7,employeeJson.getCity());
			ps.setString(8, employeeJson.getState());
			ps.setString(9,employeeJson.getCountry());
			ps.setInt(10, employeeJson.getId());
		    status=ps.executeUpdate();
		    System.out.println("in dao4");
		    if(status!=0)count++;
		  
		  	System.out.println("in update dao");
			  type=employeeJson.getType();
			  if(type!=-1)
			  {
			   ps= connection.prepareStatement("update employee_type_detail set type_id=? where employee_id=? ") ;
			   ps.setInt(1, type);
			   ps.setInt(2,employeeJson.getId());
			   status=ps.executeUpdate();
			   if(status!=0)count++;
			   System.out.println("in update dao 2");
			  }
		  
	 }
	 catch(Exception e)
	 {
		 
	 }
	 return count;
    }
	
}
