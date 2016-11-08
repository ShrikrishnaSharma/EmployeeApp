Ext.define('EmployeeApp.view.LoginForm',{
		
	extend:'Ext.form.Panel',
    title: 'Login Form',
    
    autoHeight:true,
    bodyPadding: 5,
    width: 300,
    align:'center',
    alias:'widget.loginFormModule',
    id:'loginForm',
    

    // Any configuration items here will be automatically passed along to
    // the Ext.form.Basic instance when it gets created.

    // The form will submit an AJAX request to this URL when submitted
    //url: 'save-form.php',

    items: [{
    	xtype:'textfield',
        fieldLabel: 'Username',
        name: 'username',
        id:'username',
        allowBlank:false
    },
    {
    xtype:'textfield',
    fieldLabel:'Password',
    id:'password',
    name:'Password',
    inputType:'password',
    allowBlank:false
    },
    
    
    {
    	xtype:'authenticationTypeComboBox',
    	id:'authenticationType',
    	name:'authenticationType',
    	
    	allowBlank:false
    }
    
    
    ],

    buttons: [{
        text: 'Submit',
        handler: function() {
            // The getForm() method returns the Ext.form.Basic instance:
            var form = this.up('form').getForm();
            if (form.isValid()) {
                // Submit the Ajax request and handle the response
            	console.log(EmployeeApp.app.getController('EmployeeController'));
            	EmployeeApp.app.getController('EmployeeController').loginEmployee();
            }
        }
    }]
});

