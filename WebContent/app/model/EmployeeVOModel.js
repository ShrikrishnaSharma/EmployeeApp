Ext.define('EmployeeApp.model.EmployeeVOModel', {
	extend: 'Ext.data.Model',
	

	 fields: [
	            'name','address','city','state','country','salary',
	            {name: 'id', type: 'int'},
	            {name:'startDate',type:'date'},
	            {name:'endDate',type:'date'},
	            {name:'type',type:'String'},
	            {
	                name: 'profileCompletion' ,
	                type:'int',
	               convert: function(v, record){
	            	   
	            	   var data=record.getData();
	            	   
	            	   //console.log(data.name+','+data.address+','+data.city+','+data.state+','+data.country+','+data.salary+','+data.startDate+','+data.endDate+','+data.type);
	            	   
	            	   var profileCompletion=0;
	            	   	
	            	   if(data.name!=undefined && data.name!="")
	            		   {
	            		   profileCompletion=profileCompletion+20;
	            		   }
	            	   if(data.address!=undefined && data.address!="")
            		   {
            		   profileCompletion=profileCompletion+20;
            		   }
	            	   if(data.city!=undefined && data.city!="")
            		   {
            		   profileCompletion=profileCompletion+10;
            		   }
	            	   if(data.state!=undefined && data.state!="")
            		   {
            		   profileCompletion=profileCompletion+10;
            		   }
	            	   if(data.country!=undefined && data.country!="")
            		   {
            		   profileCompletion=profileCompletion+10;
            		   }
	            	   if(data.salary!=undefined && data.salary!="")
            		   {
            		   profileCompletion=profileCompletion+10;
            		   }
	            	   if(data.type!=undefined && data.type!="")
            		   {
            		   profileCompletion=profileCompletion+10;
            		   }
	            	   if(data.startDate!=undefined && data.startDate!="")
            		   {
            		   profileCompletion=profileCompletion+5;
            		   }
	            	   if(data.endDate!=undefined && data.endDate!="")
            		   {
            		   profileCompletion=profileCompletion+5;
            		   }
	            	   
	            	  // console.log('profile completion is '+profileCompletion);
	            	   return profileCompletion; 
	               }
	                     
	               },
	            
	        ],
	        idProperty: 'id'
});


