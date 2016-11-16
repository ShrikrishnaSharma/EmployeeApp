Ext.define('EmployeeApp.store.EmployeeTypeStore',{
	extend:'Ext.data.Store',
	model:'EmployeeApp.model.EmployeeTypeModel',
	remoteGroup: true,

	//storeId:'employeeTypeStore',
	/*constructor: function()
	{
		this.callParent();
		console.log("store created");
	},*/
	proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'http://10.104.15.90:8080/EmployeeApp2//ListEmployeeType',
        reader: {
            root: 'employeeListTypes'
            
            
        }

		
        // sends single sort as multi parameter
        //simpleSortMode: false,
    },
    autoLoad: false
});
