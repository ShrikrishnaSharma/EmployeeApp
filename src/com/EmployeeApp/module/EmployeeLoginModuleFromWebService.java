package com.EmployeeApp.module;

import java.io.IOException;
import java.net.URL;
import java.util.Map;

import javax.security.auth.Subject;
import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.callback.UnsupportedCallbackException;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;
import javax.xml.namespace.QName;
import javax.xml.ws.Service;

import com.tm.service.AuthenticateUser;
import com.tm.service.AuthenticateUserImpl;

public class EmployeeLoginModuleFromWebService implements LoginModule {
	
	private CallbackHandler callbackHandler=null;
	private Subject subject;
	private Map<String, ?> sharedState;
	private Map<String, ?> options;
	private boolean succeeded;

	@Override
	public void initialize(Subject subject, CallbackHandler callbackHandler,
			Map<String, ?> sharedState, Map<String, ?> options) {
		System.out.println("Login Module - initialize called");
		this.subject = subject;
		this.callbackHandler =  callbackHandler;
		this.sharedState = sharedState;
		this.options = options;
	

		System.out.println("testOption value: " + (String) options.get("testOption"));

		succeeded = false;
		
	}

	@Override
	public boolean login() throws LoginException {
		System.out.println("Login Module - login called");
		if (callbackHandler == null){
	        throw new LoginException("No callback handler supplied.");
	    }
			
		
		
	   Callback[] callbacks = new Callback[2];
	    callbacks[0] = new NameCallback("username");
	    callbacks[1] = new PasswordCallback("password", false);
	   

	    try {
	        callbackHandler.handle( callbacks);
	        
	        
	        //--> authenticate if username is the same as password (yes, this is a somewhat simplistic approach :-)
	       
	    } catch (IOException ioe)  {
	        ioe.printStackTrace();
	        throw new LoginException("IOException occured: "+ioe.getMessage());
	    } catch (UnsupportedCallbackException ucbe) {
	        ucbe.printStackTrace();
	        throw new LoginException("UnsupportedCallbackException encountered: "+ucbe.getMessage());
	    }
	    
	    String username = ((NameCallback) callbacks[0]).getName();
        String password = new String(((PasswordCallback) callbacks[1]).getPassword());
        
        try
        {
        URL url = new URL("http://localhost:9999/ws/authenticateUser?wsdl");  
        QName qname = new QName("http://service.tm.com/", "AuthenticateUserImplService");
        System.out.println(qname);
        System.out.println("-------------");
        
        Service service = Service.create(url, qname);  
        System.out.println("----------"+service);
        QName qPortName=new QName("http://service.tm.com/", "AuthenticateUserImplPort");
        AuthenticateUser authenticateUser=service.getPort(qPortName,AuthenticateUser.class);
        
        System.out.println(authenticateUser);
        succeeded=authenticateUser.authenticateUser(username, password);
        
        }catch(Exception e)
        {
        	System.out.println("unable to use web service");
        	succeeded=false;
        	e.printStackTrace();
        }
        return succeeded;
	}

	@Override
	public boolean commit() throws LoginException {
		System.out.println("Login Module - logout called");
		return true;
	}

	@Override
	public boolean abort() throws LoginException {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean logout() throws LoginException {
		// TODO Auto-generated method stub
		return false;
	}

}
