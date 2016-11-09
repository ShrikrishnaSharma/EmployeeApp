var authenticationTypes = Ext.create('Ext.data.Store', {
    fields: ['typeId', 'typeName'],
    data : [
        {"typeId":1, "typeName":"Static"},
        {"typeId":2, "typeName":"DB"},
        {"typeId":3, "typeName":"Web Service"}
       
        //...
    ]
});


Ext.define('EmployeeApp.view.AuthenticationTypeComboBox', {
	extend:'Ext.form.ComboBox',
	alias:'widget.authenticationTypeComboBox',
	id:'authenticationTypeComobBox',
    fieldLabel: 'Choose Authentication',
    store: authenticationTypes,
    queryMode: 'local',
    
    displayField: 'typeName',
    valueField: 'typeId'
    
    
});