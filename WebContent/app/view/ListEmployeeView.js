


Ext.define('EmployeeApp.view.ListEmployeeView',
{
id:'displayViewGridPanel',
extend:'Ext.panel.Panel',
alias:'widget.viewPanel',
autoHeight: false,
border: false,
title: 'Employee Data',

/*plugins: [
          Ext.create('Ext.grid.plugin.RowEditing', {
              clicksToEdit: 1
          })
      ],*/

margins: '5 5 0 0',
items: [
          {xtype:'toolbar',
	        id:'toolbarType',
	             items: [
	         {
	             xtype: 'typeComboBox', // default for Toolbars
	             id:'type'
	            
	         },
	         
	         
	         
	         {
   	        	 xtype: 'button',
	        	 text: 'ADD EMPLOYEE',
	        		 align:'right',
	        		 
	        		 handler:function()
	        		 {
	        			 Ext.getCmp('displayViewGridPanel').hide();
	        			 
	        			 if(obj!=null)
	        				 {
	        				 console.log('obj is not null');
	        				 Ext.getCmp('name').setValue(obj.name);
	        				 Ext.getCmp('startDate').setValue(obj.startDate);
	        				 Ext.getCmp('endDate').setValue(obj.endDate);
	        				 Ext.getCmp('description').setValue(obj.description);
	        				 Ext.getCmp('salary').setValue(obj.salary);
	        				 Ext.getCmp('address').setValue(obj.address);
	        				 Ext.getCmp('city').setValue(obj.city);
	        				 Ext.getCmp('state').setValue(obj.state);
	        				 Ext.getCmp('country').setValue(obj.country);
	        				 
	        				 }
	        			 
	        			
	        			 Ext.getCmp('addEmployeeFormParentPanel').show();
	        			 
	        			 
	        		 }
	         
	         },
	         {
	        	 xtype:'button',
	        	 text: 'DELECT CHECKED EMPLOYEES',
	        	 handler:function(grid,rowIndex)
	        	 
        		 {
	        		 Ext.Msg.confirm('Confirmation','Do you want to delete selected employees',function(btnText){
	        			 
	        			 
	        			 if(btnText==="yes")
	        				 {
	        				 
	        				 
	        			 
	        		 
	        		 var empIds="";
	        		 var empId=[];
	        		 
	        		 var selection = Ext.getCmp('display-view').columns[11];
	        		 
	        		 var store=Ext.getCmp('display-view').getStore();

	        		 var totalCount = Ext.getCmp('display-view').getStore().totalCount;
	        		 var totalRowsToDelete=rwIndex.length;
	        		 
	        		 for(var i=0; i<totalRowsToDelete;i++)
	        			 {
	        			 var emp=Ext.getCmp('display-view').getStore().getAt(rwIndex[i]);
	        			 empId.push(emp.get('id'));
	        			 
	        			 if(i==totalRowsToDelete-1)
	        				 {
	        				 empIds=empIds+emp.get('id');
	        				 }
	        			 else
	        				 {
	        				 empIds= emp.get('id')+","+empIds;
	        				 }
	        			 
	        			 }
	        		 
	        		 /*for(var i=0;i<empId.length;i++)
	      		   {
	      		   empIds=empIds+empId[i];
	      		   if(i<(empId.length-1))
	      			   {
	      			   empIds= empIds+",";
	      			   }
	      		   
	      		   }*/
	        		 console.log(empIds);
	        			
	        		 EmployeeApp.app.getController('EmployeeController').deleteSelectedEmployees(empIds);
	        			
	        			 
	        		 
	        		 
        		 }
	        		 
	        		 } );
	         }
	         },
	         {
	        	 xtype:'button',
	        	 text: 'DELECT SELECTED EMPLOYEES',
	        	 handler:function()
	        	 
        		 {
	        		 Ext.Msg.confirm('Confirmation','Do you want to delete selected employees',function(btnText){
	        			 
	        			 
	        			 if(btnText==="yes")
	        				 {
	        				if( Ext.getCmp('display-view').getSelectionModel().hasSelection())
	        					{
	        				 var length=Ext.getCmp('display-view').getSelectionModel().getSelection().length;
	        				 console.log(length);
	        				 var empIds="";
	        				
	        			for(var i=0;i<length;i++)
	        				{
	        				var row=Ext.getCmp('display-view').getSelectionModel().getSelection()[i];
	        				console.log(row);
	        			
	        			 var data=row.get('id');
	        			 if(i==length-1)
	        				 {
	        				 empIds=empIds+data;
	        				 }
	        			 else
	        				 {
	        				 empIds=empIds+data+",";
	        				 }
	        			 
	        			 
	        			 
	        			 console.log(data);
	        			 
	        			 
	        				}
	        		 
	        		
	        			
	        		 EmployeeApp.app.getController('EmployeeController').deleteSelectedEmployees(empIds);
	        			
	        			 
	        					}
	        				
	        				else
	        					{
	        					Ext.Msg.alert("error","Please first select rows to delete");
	        					}
	        		 
        		 }
	        		 
	        		 } );
	         }
	         },

	         {
	        	 xtype:'button',
	        	 text:'Logout',
	        	
	        	
	        	 
	        	 handler:function()
	        	 {
	        		 EmployeeApp.app.getController('EmployeeController').logout();
	        	 }
	         
	         },
	         
	         
	         
	      
]
},
        {
	
	     xtype:'panel',
	     //layout:'fit',
	    // autoHeight: true,
	    // margins: '5 5 0 0',
	     items :[{xtype:'displayViewGrid'}]
        
        }
        
        

]
});