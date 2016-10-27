

Ext.define('EmployeeApp.view.EmployeeGrid', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.displayViewGrid',
	id: 'display-view',
	store: 'EmployeeDetailStore',
	viewConfig:{
	    markDirty:false
	},
	multiSelect:true,
	
	
	
    //title: 'Active Promotions',
	
	
    columns:[{
        // id assigned so we can apply custom css (e.g. .x-grid-cell-topic b { color:#333 })
        // TODO: This poses an issue in subclasses of Grid now because Headers are now Components
        // therefore the id will be registered in the ComponentManager and conflict. Need a way to
        // add additional CSS classes to the rendered cells.
        
        text:'EMPLOYEE_ID',
        dataIndex: 'id',
        flex: 1,
        hidden:false,
        sortable: false
    },
    {
       
        text: "EMPLOYEE_NAME",
        dataIndex: 'name',
        id:'employeeName',
        width: 150,
        editor: {
            xtype:'textfield',
            allowBlank:false
        },
       
        sortable: false
    },
    /*{
        xtype: 'typeComboBox2', 
        padding:20,// default for Toolbars
        id:'employeeTypeId',
        renderer:function()
        {
        	Ext.getCmp('typeComboBox2').setValue()
        }
    }*/
    {
        text: "EMPLOYEE_TYPE",
        dataIndex: 'type',
        width: 50,
        editor: {
            xtype:'typeComboBox2',
            allowBlank:false
        },
        sortable: false
    }/*,
    {
        id: 'departmentName',
        text: "DEPARTMENT_NAME",
        dataIndex: 'departmentList',
        width: 50,
        renderer: function(value)
        {   
        	console.log("in renderer");
        	var department= "";
        	for(var i=0; i<value.length; i++ )
        		{
        		department= value[i]+","+department;
        		}
        	return department;
        },
        sortable: false
    }*/,
    {
       
        text: "SALARY",
        dataIndex: 'salary',
        width: 100,
        editor: {
            xtype:'textfield'
           // allowBlank:false
        },
        sortable: false
    },
    {
        
        text: "ADDRESS",
        dataIndex: 'address',
        width: 150,
        //renderer: renderFirst,
        editor: {
            xtype:'textfield'
           // allowBlank:false
        },
        sortable: false
    },
    {
        
        text: "CITY",
        dataIndex: 'city',
        width: 100,
        editor: {
            xtype:'textfield'
           // allowBlank:false
        },
        sortable: false
    },
    {
       
        text: "STATE",
        dataIndex: 'state',
        width: 150,
        //renderer: renderFirst,
        editor: {
            xtype:'textfield'
           // allowBlank:false
        },
        sortable: false
    },
    {
        
        text: "COUNTRY",
        dataIndex: 'country',
        width: 50,
        editor: {
            xtype:'textfield'
            //allowBlank:false
        },
        sortable: false
    },
    
    {
       
        text: "START_DATE",
        dataIndex: 'startDate',
        width: 50,
        //renderer: renderFirst,
        editor: {
            xtype:'datefield',
            	
            allowBlank:true
        },
        sortable: false
    },
    {
       
        text: "END_DATE",
        dataIndex: 'endDate',
        editor: {
            xtype:'datefield',
           
            	
           
            allowBlank:true
        },
        sortable: false
    },

        {
            text:"Profile Completion %",
            id:"profileCompletionColumn",
           dataIndex:'profileCompletion',
           sortable:false
            
           /* renderer: function(val, meta, rec, rowIdx, colIdx, store, view) {
                var column = view.getHeaderAtIndex(0);
                var dataIndex = column.dataIndex;
            }*/
    		
        },
        {
            xtype: 'checkcolumn',
            header: 'Delete',
            dataIndex: 'active',
            width: 60,
            editor: {
                xtype: 'checkbox',
                cls: 'x-grid-checkheader-editor'
            },
            listeners:{
            	'checkchange':function(field, rowIndex, checked, eOpts){
            		
            		console.log('field'+field);
            		console.log('row index '+rowIndex);
            		console.log('checked '+checked);
            		console.log('e Opts '+eOpts);
            		
            		if(checked===true)
            			{
            			rwIndex.push(rowIndex);
            			}
            		if(checked==false)
            			{
            			rwIndex.pop(rowIndex);
            			}
            		
            		
            		console.log(rwIndex);
            		
            	}
            
            	
             // rwIndex.push(rowIndex);  
            }
        }
       
        /*{
            xtype: 'actioncolumn',
            width: 30,
            sortable: false,
            menuDisabled: true,
            items: [{
                
                tooltip: 'Delete Employee',
                scope: this,
                handler: function(grid, rowIndex){
                
                }
            }]
        }*/
    
 ],
 selType: 'rowmodel',
 plugins: [
     Ext.create('Ext.grid.plugin.RowEditing', {
         clicksToEdit: 2,
         errorSummary:false
     })
 ],
 
 listeners: {
	 
	 'edit':function(editor,e)
	 {
		// execute an XHR to send/commit data to the server, in callback do (if successful):
			console.log('edit it ');
			
			/* var row = Ext.getCmp('display-view').getSelectionModel().getSelection()[0];
			 console.log(row.get('EMPLOYEE_NAME'));*/
		
			var employeeDataObject={};
			 employeeDataObject.name=e.newValues.name;
			employeeDataObject.startDate=e.newValues.startDate;
			if(employeeDataObject.startDate==undefined || employeeDataObject.startDate=="" || employeeDataObject.startDate==null)employeeDataObject.startDate=e.originalValues.startDate;
			employeeDataObject.startDate=new Date(employeeDataObject.startDate).getDate()+"/"+(new Date(employeeDataObject.startDate).getMonth()+1)+"/"+new Date(employeeDataObject.startDate).getFullYear();
			console.log('startDate' +employeeDataObject.startDate);
			 employeeDataObject.endDate=e.newValues.endDate;
			
			if(employeeDataObject.endDate==undefined || employeeDataObject.endDate=="" || employeeDataObject.endDate==null)employeeDataObject.endDate=e.originalValues.endDate;
			employeeDataObject.endDate=new Date(employeeDataObject.endDate).getDate()+"/"+(new Date(employeeDataObject.endDate).getMonth()+1)+"/"+new Date(employeeDataObject.endDate).getFullYear();
			console.log('endDate'+employeeDataObject.endDate);
			employeeDataObject.description=e.newValues.description;
			employeeDataObject.salary=e.newValues.salary;
			employeeDataObject.address=e.newValues.address;
			employeeDataObject.city=e.newValues.city;
			employeeDataObject.state=e.newValues.state;
			employeeDataObject.country=e.newValues.country;
			employeeDataObject.type=e.newValues.type;
			
			employeeDataObject.id=e.originalValues.id;
			console.log(employeeDataObject);
			
			
			
			EmployeeApp.app.getController('EmployeeController').inlineUpdateEmployee(employeeDataObject);
		   
	 }

 },
    
 bbar: [{xtype:'paging'}]
   
});





