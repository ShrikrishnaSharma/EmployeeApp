var states = Ext.create('EmployeeApp.store.AddEmployeeFormTypeComboBoxStore');

// Create the combo box, attached to the states data store
Ext.define('EmployeeApp.view.TypeComboBox2', {
	extend:'Ext.form.ComboBox',
    fieldLabel: 'Choose Type',
    allowBlank:false,
    alias:'widget.typeComboBox2',
    id:'typeComboBox2',
    store: states,
    queryMode: 'local',
    displayField: 'typeName',
    valueField: 'id'
  });