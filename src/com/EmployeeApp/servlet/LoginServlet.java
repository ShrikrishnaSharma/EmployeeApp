package com.EmployeeApp.servlet;

import java.io.IOException;
import java.io.PrintWriter;

import javax.security.auth.Subject;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.login.LoginContext;
import javax.security.auth.login.LoginException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.EmployeeApp.handler.MyCallbackHandler;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		boolean status=false;
		
		
		 String username;
		 String password;
		 
		 System.setProperty("java.security.auth.login.config", "C:\\EmployeeApp2\\WebContent\\WEB-INF\\jass.config");
		
		username=request.getParameter("username");
		password=request.getParameter("password");
		
		System.out.println("username:"+username);
		System.out.println("password:"+password);
		CallbackHandler handler = new MyCallbackHandler(username, password);
		PrintWriter pw=response.getWriter();
		
		LoginContext lc = null;
	      try {
	          lc = new LoginContext("TestLogin",
	                          handler);
	          
	        lc.login();
	          
	         
	         pw.println("{\"success\":true,");
	         pw.println("\"message\":\"Employee Logged in successfully\"}");
	         
	      } catch (LoginException le) {
	          System.err.println("Cannot create LoginContext. "
	              + le.getMessage());
	          
	          pw.println("{\"success\":false,");
		         pw.println("\"message\":\"Incorrect username/password\"}");
	      } catch (SecurityException se) {
	          System.err.println("Cannot create LoginContext. "
	              + se.getMessage());
	          pw.println("{\"success\":false,");
		         pw.println("\"message\":\"Incorrect username/password\"}");
	      }
	}

}
