Ext.define('EmployeeApp.controller.EmployeeController',{
	extend:'Ext.app.Controller',
	stores:['EmployeeDetailStore','EmployeeTypeStore','DepartmentStore', 'AddEmployeeFormTypeComboBoxStore'],
	models:['EmployeeVOModel','EmployeeTypeModel','DepartmentModel'],
	views:['EmployeeGrid','ListEmployeeView','TypeComboBox', 'Paging','AddEmployeeForm','AddEmployeeFormPanel','AddDepartmentForm', 'Buttons','AddEmployeeFormParentPanel','TypeComboBox2','LoginForm','AuthenticationTypeComboBox'],
	refs:[
	      
	],
	init:function()
	{
		 console.log("in init");
		
	},
	
	
	logout:function()
	{
Ext.Ajax.request({
			
			
			url:'http://10.104.15.90:8080/EmployeeApp2/LogoutServlet',
			method:'get',
			
				success:function(response) {
		        	
		    	    // resp is the XmlHttpRequest object
		    	    var options = Ext.decode(response.responseText);
		    	    console.log(options.success);
		    	    console.log(options.message);
		    	    //console.log(options["success"]);
		    	    //console.log(globalProperties.saveEmployeeMessage);
		    	    if(options.success===true)
		    	    {
		    	    	Ext.Msg.alert('Notification',options.message);
		    	    	
		    	    	Ext.getCmp('displayViewGridPanel').hide();
		    	    	Ext.getCmp('loginForm').getForm().reset();
		    	    	 Ext.getCmp('loginForm').show();
		    	    	
		    	    }
		    	    else
		    	    	{
		    	    	Ext.Msg.alert("Error",options.message);
		    	    	}
		    	    
		    	  }     
		});
	},
	
	
	loginEmployee:function()
	{
		var username=Ext.getCmp('username').getValue();
		var password=Ext.getCmp('password').getValue();
		console.log(Ext.getCmp('authenticationType'));
		var authenticationType=Ext.getCmp('authenticationType').getValue();
		console.log(authenticationType);
		Ext.Ajax.request({
			
			
			url:'http://10.104.15.90:8080/EmployeeApp2/LoginServlet',
			method:'post',
			params:{
				username:username,
				password:password,
				authenticationType:authenticationType
				},
				success:function(response) {
		        	
		    	    // resp is the XmlHttpRequest object
		    	    var options = Ext.decode(response.responseText);
		    	    console.log(options.success);
		    	    console.log(options.message);
		    	    //console.log(options["success"]);
		    	    //console.log(globalProperties.saveEmployeeMessage);
		    	    if(options.success===true)
		    	    {
		    	    	Ext.Msg.alert('Notification',options.message);
		    	    	
		    	    	Ext.getCmp('display-view').getStore().load();
		    	    	 Ext.getCmp('loginForm').hide();
		    	    	Ext.getCmp('displayViewGridPanel').show();
		    	    }
		    	    else
		    	    	{
		    	    	Ext.Msg.alert("Error",options.message);
		    	    	}
		    	    
		    	  }     
		});
	},
	deleteSelectedEmployees:function(empIds)
	{
		console.log(empIds);
		Ext.Ajax.request({
       		url:'http://10.104.15.90:8080/EmployeeApp2/DeleteEmployee',
       		method:'post',
       		
       		params:{
       			empIds:empIds
       			
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
    	    	Ext.Msg.alert('Notification','Employees Deleted Succesfully');
    	    	
    	    	Ext.getCmp('display-view').getStore().load();
    	    	 //Ext.getCmp('addEmployeeFormParentPanel').hide();
    	    	//Ext.getCmp('displayViewGridPanel').show();
    	    }
    	    else
    	    	{
    	    	Ext.Msg.alert("error","unable to delete");
    	    	}
    	    
    	  }     
       		
       	});
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
       		url:'http://10.104.15.90:8080/EmployeeApp2/AddEmployee',
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
   
   
   
   inlineUpdateEmployee:function(employeeDataObject)
   {
	  
       
      /* var employeeDataJson="";
       employeeDataJson=employeeDataJson+"{id:"+employeeDataObject.id+",";
       employeeDataJson=employeeDataJson+"name:"+employeeDataObject.name+",";
       employeeDataJson=employeeDataJson+"startDate:"+employeeDataObject.startDate+",";
       employeeDataJson=employeeDataJson+"endDate:"+employeeDataObject.endDate+",";
       employeeDataJson=employeeDataJson+"description:"+employeeDataObject.description+",";
       employeeDataJson=employeeDataJson+"salary:"+employeeDataObject.salary+",";
       employeeDataJson=employeeDataJson+"address:"+employeeDataObject.address+",";
       employeeDataJson=employeeDataJson+"city:"+employeeDataObject.city+",";
       employeeDataJson=employeeDataJson+"state:"+employeeDataObject.state+",";
       employeeDataJson=employeeDataJson+"country:"+employeeDataObject.country+",";
       employeeDataJson=employeeDataJson+"type:"+employeeDataObject.type;
       employeeDataJson=employeeDataJson+"}";*/
      
       employeeDataJsonObject=JSON.stringify(employeeDataObject);
       console.log(employeeDataJsonObject);
       	Ext.Ajax.request({
       		url:'http://10.104.15.90:8080/EmployeeApp2/UpdateEmployee',
       		method:'post',
       		headers: {
       	        'employeeDataJsonObject': employeeDataJsonObject
       	    },
       		//jsonData: employeeDataJsonObject,
       		/*params:{
       			
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
   
       			type:type
       			
       			callback : function(options, success, response){ 
       				console.log('alert');
       				addEmployeeResponseJson = Ext.JSON.decode(response.responseText);
       				console.log(addEmployeeResponseJson);
              
       		},*/
        success: function(response) {
        	
    	    // resp is the XmlHttpRequest object
    	    var options = Ext.decode(response.responseText);
    	    //console.log(options["success"]);
    	    //console.log(globalProperties.saveEmployeeMessage);
    	    if(options.success==="true")
    	    {
    	    	Ext.Msg.alert('Notification',options.message);
    	    	
    	    	Ext.getCmp('display-view').getStore().load();
    	    	
    	    	
    	    	
    	    	
    	    	 //Ext.getCmp('addEmployeeFormParentPanel').hide();
    	    	//Ext.getCmp('displayViewGridPanel').show();
    	    }
    	    else
    	    	{
    	    	Ext.Msg.alert("error","unable to update inline");
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
       		url:'http://10.104.15.90:8080/EmployeeApp2/UpdateEmployee',
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