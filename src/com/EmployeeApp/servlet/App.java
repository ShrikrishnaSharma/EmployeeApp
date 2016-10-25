package com.EmployeeApp.servlet;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.util.HashMap;
import java.util.Properties;

public class App {
	
	public static HashMap<String, String> getMap(){

		Properties prop = new Properties();
		InputStream input = null;
        HashMap<String, String> hm= new HashMap<String,String>();
		try {

			input = new FileInputStream("C://EmployeeApp2//src//resources.properties");
			System.out.printf("--------------------------"+"\n"+input);

			// load a properties file
			prop.load(input);
            
			hm.put("saveEmployeeMessage", prop.getProperty("saveEmployeeMessage"));
			
			System.out.println(hm);
			

		} catch (IOException ex) {
			ex.printStackTrace();
		} finally {
			if (input != null) {
				try {
					input.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
			}
		}
		return hm;
	}
}