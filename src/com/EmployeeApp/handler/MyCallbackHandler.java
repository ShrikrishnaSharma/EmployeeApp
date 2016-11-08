package com.EmployeeApp.handler;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

import javax.security.auth.callback.Callback;
import javax.security.auth.callback.CallbackHandler;
import javax.security.auth.callback.NameCallback;
import javax.security.auth.callback.PasswordCallback;
import javax.security.auth.callback.TextOutputCallback;
import javax.security.auth.callback.UnsupportedCallbackException;

public class MyCallbackHandler implements CallbackHandler {
	
	private String username;
	private String password;
	private int authenticationType;
	
	public MyCallbackHandler(String username,String password)
	{
		System.out.println("Callback Handler - constructor called");
		this.username=username;
		this.password=password;
		
		
	
	}
	
	public void setAuthenticationType(int authenticationType)
	{
		this.authenticationType=authenticationType;
		
	}
	
	public int getAuthenticationType(){
		
		
		return authenticationType;
	}

	@Override
	public void handle(Callback[] callbacks) throws IOException,
			UnsupportedCallbackException {
		System.out.println("Callback Handler - handle called");
		for (int i = 0; i < callbacks.length; i++) {
            if (callbacks[i] instanceof NameCallback) {

                // prompt the user for a username
                NameCallback nc = (NameCallback)callbacks[i];
                nc.setName(username);

                

            } else if (callbacks[i] instanceof PasswordCallback) {

                // prompt the user for sensitive information
                PasswordCallback pc = (PasswordCallback)callbacks[i];
                pc.setPassword(password.toCharArray());
                
               

            } else {
                throw new UnsupportedCallbackException
                        (callbacks[i], "Unrecognized Callback");
            }
        }
    }
		
	}


