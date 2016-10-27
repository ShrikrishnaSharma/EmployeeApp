Ext.define('EmployeeApp.view.Buttons',
{
id:'buttonToolbar',
extend:'Ext.toolbar.Toolbar',
alias:'widget.buttonToolbar',
autoHeight: true,
border: false,
title: 'Employee Data',



items: [{
	xtype:'button',
    text: 'Save',
    handler: function() {
       // this.up('form').getForm().isValid();
    	console.log(Ext.getCmp('itemselector-field').getValue());
    	
    	
    	
    	if(!Ext.getCmp('addEmployeeForm').getForm().isValid())
    		{
    		 Ext.Msg.alert("Error","Please fill out the required details");
    		}
    	
    	else
    		{
    	
    	if(Ext.getCmp('itemselector-field').getValue().length==0)
  		 {
  		 Ext.Msg.alert("Error","Please select department");
  		 Ext.getCmp('addEmployeeFormPanel').setActiveTab(1);
  		 }
    	else
    {
    		if(Ext.getCmp('employeeId').getValue()==undefined)
    		{
    			EmployeeApp.app.getController('EmployeeController').addEmployee();
    			console.log('add');
    		}
    		else
    			{
    			console.log('update ');
    			EmployeeApp.app.getController('EmployeeController').updateEmployee();
    			}
       	 
    }
    	//console.log(Ext.getCmp('name').getValue());
       	 
    		}
       
        
    }
},
{ 
	xtype:'button',
    text: 'Copy',
    handler: function() {
    	
    	console.log("in copy");
    	
    	Ext.getCmp('name').reset();
    	Ext.getCmp('employeeId').setValue(null);
    	console.log("employee id value"+Ext.getCmp('employeeId').getValue()); 
    	/*var name=Ext.getCmp('name').getValue();
    	var startDate= Ext.getCmp('startDate').getValue();
         var endDate= Ext.getCmp('endDate').getValue();
         var description= Ext.getCmp('description').getValue();
         var salary= Ext.getCmp('salary').getValue();
         var address= Ext.getCmp('address').getValue();
         var city= Ext.getCmp('city').getValue();
         var state= Ext.getCmp('state').getValue();
         var country= Ext.getCmp('country').getValue();
         obj=new employeeDataObject(name,startDate,endDate,description,salary,address,city,state,country);
         console.log(obj);
         console.log(name+" "+startDate+" "+endDate+" "+description+" "+salary+" "+address+" "+city+" "+state+" "+country+" ");
         
         
         */
         
         
         
         
         
         
    }
},
{   
	xtype:'button',
    text: 'Reset',
    handler: function() {
    	Ext.getCmp('addEmployeeForm').getForm().reset();
    	Ext.getCmp('addDepartmentForm').getForm().reset();
    	obj=null;
    	Ext.getCmp('employeeId').setValue(null);
    	console.log("employee id value"+Ext.getCmp('employeeId').getValue()); 
    }
},

{ 
	xtype:'button',
    text: 'Cancel',
    handler: function() {
    	
    	Ext.getCmp('employeeId').setValue(null);
    	console.log("employee id value"+Ext.getCmp('employeeId').getValue()); 
    	 //console.log("in cancel");
    	if(Ext.getCmp('addEmployeeForm').isDirty()==true || Ext.getCmp('addDepartmentSelectorForm').isDirty()==true)
    		{
    		Ext.Msg.confirm('Confirm','Do you wish to go to home screen',function(btnText){
    	        if(btnText === "yes"){
    	        	Ext.getCmp('addEmployeeForm').getForm().reset();
    	        	Ext.getCmp('addDepartmentForm').getForm().reset();
    	        	//Ext.getCmp('employeeType').reset();
    	        	Ext.getCmp('addEmployeeFormParentPanel').hide();
    	        	Ext.getCmp('display-view').getStore().reload();
    	       	    Ext.getCmp('displayViewGridPanel').show();
    	       	    
    	        }
    	        else if(btnText === "no"){
    	            
    	        }
    	    }, this);
    		}
    	else{
    		
    		Ext.getCmp('addEmployeeForm').getForm().reset();
        	Ext.getCmp('addEmployeeFormParentPanel').hide();
        	Ext.getCmp('displayViewGridPanel').show();
    	}
    	
    	
    	
    	
    	 
			
		
    }
}]

});