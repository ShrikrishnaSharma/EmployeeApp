


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
	            
	         },{
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