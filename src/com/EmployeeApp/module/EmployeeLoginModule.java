package com.EmployeeApp.module;

import java.io.IOException;
import java.util.Map;

import javax.security.auth.Subject;
import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.callback.UnsupportedCallbackException;
import javax.security.auth.login.FailedLoginException;
import javax.security.auth.login.LoginException;
import javax.security.auth.spi.LoginModule;

import com.EmployeeApp.handler.MyCallbackHandler;


public class EmployeeLoginModule implements LoginModule {
	
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

		   

			if ("myName".equals(username) && "myPassword".equals(password)) {
				System.out.println("Success! You get to log in!");
				succeeded = true;
				return succeeded;
			} else {
				System.out.println("Failure! You don't get to log in");
				succeeded = false;
				throw new FailedLoginException("Sorry! No login for you.");
			}
		}

		
	

	@Override
	public boolean commit() throws LoginException {
		// TODO Auto-generated method stub
		System.out.println("Login Module - commit called");
		return true;
	}

	@Override
	public boolean abort() throws LoginException {
		// TODO Auto-generated method stub
		System.out.println("Login Module - abort called");
		return false;
	}

	@Override
	public boolean logout() throws LoginException {
		// TODO Auto-generated method stub
		System.out.println("Login Module - logout called");
		return false;
	}

}
