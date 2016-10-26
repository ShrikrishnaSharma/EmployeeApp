package com.EmployeeApp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.EmployeeApp.dao.DepartmentDAO;
import com.EmployeeApp.dao.EmployeeDAO;

/**
 * Servlet implementation class DeleteEmployee
 */
@WebServlet("/DeleteEmployee")
public class DeleteEmployee extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DeleteEmployee() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String empIds=request.getParameter("empIds");
		String [] empIdList=empIds.split(",");
		System.out.println(empIdList);
		int count=empIdList.length;
		
		PrintWriter out = response.getWriter();
		
		for(int i=0;i<empIdList.length;i++)
		{
			try
			{
			int empId=Integer.parseInt(empIdList[i]);
			DepartmentDAO departmentDAO=new DepartmentDAO();
			departmentDAO.deleteEmployeeDepartmentDetail(empId);
			EmployeeDAO employeeDAO=new EmployeeDAO();
			int status= employeeDAO.deleteEmployeeById(empId);
			if(status!=0)count--;
		}catch(Exception e)
		{
			System.out.println("unable to delete Selected Employees");
			e.printStackTrace();
			
		}
	}
		if(count==0)
		{
		 out.println("{");
	        out.println("\"success\": \"true\",");
	        
	        out.println("\"message\": \"Employees Deleted Successfully\"");
	        out.println("}");
	}else
	{
		out.println("{");
        out.println("\"success\": \"false\",");
        out.println("\"message\": \"Unable to delete selected employees..\"");
        out.println("}");
	}
	}
	

}
