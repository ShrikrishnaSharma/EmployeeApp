Ext.define('EmployeeApp.store.EmployeeDetailStore',{
	extend:'Ext.data.Store',
	model:'EmployeeApp.model.EmployeeVOModel',
	remoteGroup: true,
	pageSize: 10,

	storeId:'employeeDetailStore',
	
	proxy: {
        // load using script tags for cross domain, if the data in on the same domain as
        // this page, an HttpProxy would be better
        type: 'jsonp',
        url: 'http://10.104.15.90:8080/EmployeeApp2/ListEmployee',
        reader: {
            root: 'employees',
            totalProperty: 'totalCount'
        }
        // sends single sort as multi parameter
        //simpleSortMode: false,
    },
    autoLoad: true
});