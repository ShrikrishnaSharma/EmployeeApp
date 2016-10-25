package com.EmployeeApp.servlet;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;

import com.EmployeeApp.dao.DepartmentDAO;
import com.EmployeeApp.dao.EmployeeDAO;
import com.EmployeeApp.model.Employee;

import java.text.SimpleDateFormat;

/**
 * Servlet implementation class AddEmployee1
 */
@WebServlet("/AddEmployee")
public class AddEmployee extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     * 
     * 
     */
	


	
	private String name;
	private Date startDate;
	private Date endDate;
	private String description;
	private double salary;
	private String address;
	private String city;
	private String state;
	private String country;
	String d;
	int type;
	
	
	private SimpleDateFormat formatter=new SimpleDateFormat("yyyy-MM-dd");
	private int status=0;

	final static Logger logger=Logger.getLogger(AddEmployee.class);

	public void doPost(HttpServletRequest request,HttpServletResponse response)
	{

	    try {
	    	
	    	PrintWriter out = response.getWriter();


	        name=request.getParameter("name");
	       startDate=formatter.parse(request.getParameter("startDate"));
	        endDate=formatter.parse(request.getParameter("endDate"));
	        
	       /* startDate=request.getParameter("startDate");
	        endDate=request.getParameter("endDate");*/
	        description=request.getParameter("description");
	        if(request.getParameter("salary")=="" || request.getParameter("salary")==null)
	        {
	        	salary=0.0d;
	        }
	        else
	        {
	        salary=Double.parseDouble(request.getParameter("salary"));
	        }
	        address=request.getParameter("address");
	        city=request.getParameter("city");
	        state=request.getParameter("state");
	        country=request.getParameter("country");
	         d= request.getParameter("departmentList");
	         type=Integer.parseInt(request.getParameter("type"));
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

	       status=employeeDAO.addEmployee(employee);
	       int id=employeeDAO.getCurrentEmployeeId(name);
	       
	       employeeDAO.addType(id,type);
	       
	       DepartmentDAO departmentDAO = new DepartmentDAO();
	       departmentDAO.addEmployeeDepartmentDetail(departmentId,name);
	       
	       
	       //response.setContentType("application/json");
	       
	       
	      if(status!=0)
	      {
	        out.println("{");
	        out.println("\"success\": \"true\",");
	        out.println("\"employeeId\":"+id+",");
	        out.println("\"message\": \"Employee Added Successfully\"");
	        out.println("}");
	      }
	      else
	      {
	    	  out.println("{");
		        out.println("\"success\": \"false\",");
		        out.println("\"message\": \"Unable to add..\"");
		        out.println("}");
	      
	    	  
	       }
	       
	       





	    }

	
	
	catch (Exception e)
	    {
	        System.out.println(e);
	        e.printStackTrace();
	    }
	
	}
}


