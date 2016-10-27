Ext.define('EmployeeApp.view.AddEmployeeFormPanel',
{

	extend:'Ext.tab.Panel',
	 alias: 'widget.addEmployeeFormPanel',   
	 
	 id:'addEmployeeFormPanel',
	    items: [{
	        title: 'EMPLOYEE',
	        items:[{
	        	
	        	xtype:'addEmployeeForm'
	        
	        	
	        }]
	    
	        	
	        	
	    }, {
	        title: 'DEPARTMENT',
                      items:     [{
	        	
	        	          xtype:'addDepartmentForm'
	        	             /*listeners: {
	        	               click: 
	        	            	   {
	        	               fn: function()
	        	               {
	        	            	   console.log("department");
	        	               }
	        	            	   }      
	        	                    
	        	             }*/
	        }]
	        
	    }],
	    
 listeners: {
    tabChange: 
 	   {
    fn: function()
    {
    	
 	   if(!Ext.getCmp('addEmployeeForm').getForm().isValid())
 		   {
 		   console.log("invalid");
 		   this.setActiveTab(0);
 		   }
 	   
    }
 	   }      
         
  }
	});