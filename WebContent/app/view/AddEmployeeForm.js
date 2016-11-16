Ext.require([
    'Ext.util.Format'
   
]);

Ext.define('EmployeeApp.view.AddEmployeeForm', {
	
	extend:'Ext.form.Panel',
   
    id:'addEmployeeForm',
    alias: 'widget.addEmployeeForm',
    
    layout:{
    	
    	type:'table',
    	columns:4,
    	margin:10
    },
   // renderTo: Ext.getBody(),
    bodyPadding: 5,
  
    // Any configuration items here will be automatically passed along to
    // the Ext.form.Basic instance when it gets created.

    // The form will submit an AJAX request to this URL when submitted
    //url: 'save-form.php',
  
    items: [
            
{
	
	
    xtype: 'numberfield',
    
    name: 'employeeId',
    id:'employeeId',
   hidden:true
   
},
            
            {
    	
    	
        xtype: 'textfield',
        fieldLabel: 'Name',
        name: 'name',
        id:'name',
       allowBlank:false
        
        
       
    },
    {
        xtype: 'datefield',
        fieldLabel: 'Start Date',
        allowBlank:false,
        name: 'startDate',
        id:'startDate',
        //validateOnChange:true,
        padding:20,
        listeners   : {
        	change: function(field, newValue, oldValue, eOpts) {
                Ext.getCmp('endDate').setMinValue(field.getValue());
                Ext.getCmp('endDate').setValue(field.getValue());
        	}
        }
    },
    {
        xtype: 'datefield',
        fieldLabel: 'End Date',
        allowBlank:false,
        name: 'endDate',
        id:'endDate',
        
        validateOnChange:true,
        validator:	function(value)
        {  
        	
        	console.log(value);
        	var startDate=Ext.getCmp('startDate').getValue();
        	var endDate=Ext.getCmp('endDate').getValue();
        	console.log(startDate);
        	
        	if(startDate>endDate)
        		{
        		console.log("invalid date");
        		return "End Date should be greater than or equal to start Date";
        		}
        	
        	else
        		{
        		//var d=Ext.Date.add(endDate,-startDate);
        		var diffDays = parseInt((endDate - startDate) / (1000 * 60 * 60 * 24)); 
        		Ext.getCmp('duration').setValue(diffDays);
        		return true;
        		}
        	
        },
        	
        
        padding:20
    },
    
    {
        xtype: 'numberfield',
        fieldLabel: 'Duration(days)',
        name: 'duration',
        id:'duration',
        padding:20,
       minValue:0,
        listeners   : {
        	spinup: function(field, e, eOpts) {
                
        		console.log("number field value"+field.getValue());
        		var i=field.getValue();
                Ext.getCmp('endDate').setValue(Ext.Date.add(Ext.getCmp('startDate').getValue(),Ext.Date.DAY,i));
             
        	},
    spindown: function(field, newValue, oldValue, eOpts) {
        
        Ext.getCmp('endDate').setValue(Ext.Date.add(Ext.getCmp('endDate').getValue(),Ext.Date.DAY,-1));
	}
        }
        
    },
    {
        xtype: 'textareafield',
        fieldLabel: 'Description',
        name: 'description',
        id:'description'
       
    },
    {
        xtype: 'numberfield',
        fieldLabel: 'Salary',
        name: 'salary',
        id:'salary',
        minValue: 0,
        padding:20,
        currencySymbol: null,
        useThousandSeparator: true,
        thousandSeparator: ',',
        alwaysDisplayDecimals: false,
        fieldStyle: 'text-align: right;',
        /*useThousandSeparator: true,
        thousandSeparator: ',',*/
        	/* renderer  : function(value) {
                 return Ext.isNumber(value) ?
 	                Ext.util.Format.number(value, '0,0') :
                 	value;
             }*/
    	renderer: Ext.util.Format.numberRenderer('0.000')
      /* 
        listeners:
        	{
        	select:function( newValue, oldValue, eOpts)
        	{
        		
        	
        	}
    
        	}*/
    }
    ,{
        xtype: 'textfield',
        fieldLabel: 'Address',
        name: 'address',
        id:'address',
        
        padding:20
    },
    {
        xtype: 'textfield',
        fieldLabel: 'City',
        name: 'city',
        id: 'city',
        padding:20
       
    },
    {
        xtype: 'textfield',
        fieldLabel: 'State',
        name: 'state',
        id:'state'
      
       
    },
    {
        xtype: 'textfield',
        fieldLabel: 'Country',
        name: 'country',
        id:'country',
        padding:20
        
    },
    {
        xtype: 'typeComboBox2', 
        padding:20,// default for Toolbars
        id:'employeeTypeId'
    }
    
   
    
    ]
   /* buttons: [{
        text: 'Save',
        handler: function() {
           // this.up('form').getForm().isValid();
           
           	 EmployeeApp.app.getController('EmployeeController').addEmployee();
        	//console.log(Ext.getCmp('name').getValue());
           
            
        }
    },
    {
        text: 'Copy',
        handler: function() {
        	 var name=Ext.getCmp('name').getValue();
        	 
        	 
             var startDate= Ext.getCmp('startDate').getValue();
             var endDate= Ext.getCmp('endDate').getValue();
             var description= Ext.getCmp('description').getValue();
             var salary= Ext.getCmp('salary').getValue();
             var address= Ext.getCmp('address').getValue();
             var city= Ext.getCmp('city').getValue();
             var state= Ext.getCmp('state').getValue();
             var country= Ext.getCmp('country').getValue();
        }
    },
    {
        text: 'Reset',
        handler: function() {
        	this.up('form').getForm().reset();
        }
    },
    
    {
        text: 'Cancel',
        handler: function() {
        	
        	if(this.up('form').getForm().isDirty()==true || Ext.getCmp('addDepartmentSelectorForm').isDirty()==true)
        		{
        		Ext.Msg.confirm('Confirm','Do you wanna save your changes',function(btnText){
        	        if(btnText === "no"){
        	        	this.up('form').getForm().reset();
        	        	Ext.getCmp('addEmployeeFormPanel').hide();
        	       	 Ext.getCmp('displayViewGridPanel').show();
        	        }
        	        else if(btnText === "yes"){
        	            Ext.Msg.alert("Alert", "You have confirmed 'Yes'.");
        	        }
        	    }, this);
        		}
        	
        	
        	
        	
        	 
 			
			
        }
    }]
*/
    
    

    
 });