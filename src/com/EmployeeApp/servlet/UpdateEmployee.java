package com.EmployeeApp.servlet;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.EmployeeApp.dao.DepartmentDAO;
import com.EmployeeApp.dao.EmployeeDAO;
import com.EmployeeApp.model.Employee;

/**
 * Servlet implementation class UpdateEmployee
 */
@WebServlet("/UpdateEmployee")
public class UpdateEmployee extends HttpServlet {
	private static final long serialVersionUID = 1L;
   
   private int id;
   private String name;
   private Date startDate;
   private Date endDate;
   private String description;
   private double salary;
   private String address;
   private String city;
   private String state;
   private String country;
   private String d;
   private SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd");
   int status=0;
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		try
		{
			PrintWriter out= response.getWriter();
			id= Integer.parseInt(request.getParameter("id"));
			name= request.getParameter("name");
			startDate=formatter.parse(request.getParameter("startDate"));
			endDate= formatter.parse(request.getParameter("endDate"));
			description=request.getParameter("description");
	        salary=Double.parseDouble(request.getParameter("salary"));
	        address=request.getParameter("address");
	        city=request.getParameter("city");
	        state=request.getParameter("state");
	        country=request.getParameter("country");
	        d= request.getParameter("departmentList");
	         System.out.println(d);
	         ArrayList<String> aList= new ArrayList(Arrays.asList(d.split(",")));
	         
	         ArrayList<Integer> departmentId=new ArrayList<Integer>();
	         
	         for(int i=0;i<aList.size();i++)
	         {
	        	 int a=Integer.parseInt(aList.get(i));
	        	 departmentId.add(a);
	        	 
	         }
	         System.out.println(aList.toString());
	         
	 		 
	          
	       
	        Employee employee=new Employee(name,description,address,city,state,country,salary, startDate, endDate);

	        EmployeeDAO employeeDAO=new EmployeeDAO();

	       int status=employeeDAO.updateEmployee(employee, id);
	      // int id=employeeDAO.getCurrentEmployeeId(name);
	       
	       DepartmentDAO departmentDAO = new DepartmentDAO();
	       departmentDAO.updateEmployeeDepartmentDetail(departmentId,id);
	       
	       
	       //response.setContentType("application/json");
	       
	       
	      if(status!=0)
	      {
	        out.println("{");
	        out.println("\"success\": \"true\",");
	       // out.println("\"employeeId\":"+id+",");
	        out.println("\"message\": \"Employee Updated Succesfully\"");
	        out.println("}");
	      }
	      else
	      {
	    	  out.println("{");
		        out.println("\"success\": \"false\",");
		        out.println("\"message\": \"Unable to update..\"");
		        out.println("}");
	      
	    	  
	       }
	       
	       
			
		}
		catch(Exception e)
		{
			
		}
		
	}

}
