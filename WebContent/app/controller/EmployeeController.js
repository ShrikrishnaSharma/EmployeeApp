Ext.define('EmployeeApp.controller.EmployeeController',{
	extend:'Ext.app.Controller',
	stores:['EmployeeDetailStore','EmployeeTypeStore','DepartmentStore', 'AddEmployeeFormTypeComboBoxStore'],
	models:['EmployeeVOModel','EmployeeTypeModel','DepartmentModel'],
	views:['EmployeeGrid','ListEmployeeView','TypeComboBox', 'Paging','AddEmployeeForm','AddEmployeeFormPanel','AddDepartmentForm', 'Buttons','AddEmployeeFormParentPanel','TypeComboBox2'],
	refs:[
	      
	],
	init:function()
	{
		 console.log("in init");
		
	},
	
	addEmployee: function(){
		console.log("employee id value"+Ext.getCmp('employeeId').getValue());   
       var name= Ext.getCmp('name').getValue();
       var startDate= Ext.getCmp('startDate').getValue();
       var endDate= Ext.getCmp('endDate').getValue();
       var description= Ext.getCmp('description').getValue();
       var salary= Ext.getCmp('salary').getValue();
       var address= Ext.getCmp('address').getValue();
       var city= Ext.getCmp('city').getValue();
       var state= Ext.getCmp('state').getValue();
       var country= Ext.getCmp('country').getValue();
       var departmentList="";
    	   for(var i=0;i<Ext.getCmp('itemselector-field').getValue().length;i++)
    		   {
    		   departmentList=departmentList+Ext.getCmp('itemselector-field').getValue()[i];
    		   if(i<(Ext.getCmp('itemselector-field').getValue().length-1))
    			   {
    			   departmentList= departmentList+",";
    			   }
    		   
    		   }
    	   
    	   console.log("employee type value"+Ext.getCmp('employeeTypeId').getValue());
    	  var type=Ext.getCmp('employeeTypeId').getValue();
    	 
       
       console.log(departmentList);
      
       	Ext.Ajax.request({
       		url:'http://localhost:8080/EmployeeApp2/AddEmployee',
       		method:'post',
       		//jsonData: departmentList,
       		params:{
       			name: name,
       			startDate:startDate,
       			endDate:endDate,
       			salary:salary,
       			address:address,
       			city:city,
       			state:state,
       			description:description,
       			country:country,
       			departmentList:departmentList,
       			type:type
       			
       			/*callback : function(options, success, response){ 
       				console.log('alert');
       				addEmployeeResponseJson = Ext.JSON.decode(response.responseText);
       				console.log(addEmployeeResponseJson);*/
              
       		},
        success: function(response) {
        	
    	    // resp is the XmlHttpRequest object
    	    var options = Ext.decode(response.responseText);
    	    //console.log(options["success"]);
    	    //console.log(globalProperties.saveEmployeeMessage);
    	    if(options.success==="true")
    	    {
    	    	Ext.Msg.alert('Notification',globalProperties.saveEmployeeMessage);
    	    	Ext.getCmp('employeeId').setValue(options.employeeId);
    	    	console.log(Ext.getCmp('employeeId').getValue());
    	    	Ext.getCmp('addEmployeeFormPanel').setActiveTab(0);
    	    	
    	    	 //Ext.getCmp('addEmployeeFormParentPanel').hide();
    	    	//Ext.getCmp('displayViewGridPanel').show();
    	    }
    	    else
    	    	{
    	    	Ext.Msg.alert("unable to add");
    	    	}
    	    
    	  }     
       		
       	});
       	
       	
       
       
   },
   updateEmployee: function()
   {   
	   var id= Ext.getCmp("employeeId").getValue();
	   var name= Ext.getCmp('name').getValue();
       var startDate= Ext.getCmp('startDate').getValue();
       var endDate= Ext.getCmp('endDate').getValue();
       var description= Ext.getCmp('description').getValue();
       var salary= Ext.getCmp('salary').getValue();
       var address= Ext.getCmp('address').getValue();
       var city= Ext.getCmp('city').getValue();
       var state= Ext.getCmp('state').getValue();
       var country= Ext.getCmp('country').getValue();
       var departmentList="";
    	   for(var i=0;i<Ext.getCmp('itemselector-field').getValue().length;i++)
    		   {
    		   departmentList=departmentList+Ext.getCmp('itemselector-field').getValue()[i];
    		   if(i<(Ext.getCmp('itemselector-field').getValue().length-1))
    			   {
    			   departmentList= departmentList+",";
    			   }
    		   
    		   }
    	   
    	   var type=Ext.getCmp('employeeTypeId').getValue();
       
       console.log(departmentList);
      
       	Ext.Ajax.request({
       		url:'http://localhost:8080/EmployeeApp2/UpdateEmployee',
       		method:'post',
       		//jsonData: departmentList,
       		params:{
       			
       		    id: id,
       			name: name,
       			startDate:startDate,
       			endDate:endDate,
       			salary:salary,
       			address:address,
       			city:city,
       			state:state,
       			description:description,
       			country:country,
       			departmentList:departmentList,
       			type:type
       			
       			/*callback : function(options, success, response){ 
       				console.log('alert');
       				addEmployeeResponseJson = Ext.JSON.decode(response.responseText);
       				console.log(addEmployeeResponseJson);*/
              
       		},
        success: function(response) {
        	
    	    // resp is the XmlHttpRequest object
    	    var options = Ext.decode(response.responseText);
    	    //console.log(options["success"]);
    	    //console.log(globalProperties.saveEmployeeMessage);
    	    if(options.success==="true")
    	    {
    	    	Ext.Msg.alert('Notification',options.message);
    	    	Ext.getCmp('addEmployeeFormPanel').setActiveTab(0);
    	    	
    	    	
    	    	
    	    	
    	    	 //Ext.getCmp('addEmployeeFormParentPanel').hide();
    	    	//Ext.getCmp('displayViewGridPanel').show();
    	    }
    	    else
    	    	{
    	    	Ext.Msg.alert("unable to add");
    	    	}
    	    
  	  }     
     		
     	});
     	
     	
     
     
 }
});