Ext.define('MyApp.view.usuarios.v_Usuarios', {
    extend: 'Ext.panel.Panel',
    xtype: 'usuarios',
    controller: 'c_Usuarios',
    height: HEIGT_VIEWS,
    layout: 'hbox',
    requires: [
        'MyApp.view.usuarios.c_Usuarios',
        'MyApp.store.usuarios.s_Usuarios',
    ],
    listeners: {
        afterrender: 'onrender'//despues de caragr la vista
    },
    initComponent: function () {
        this.items = [
            {
                xtype: 'grid',
                name: 'grid',
                title: 'Simpsons',
                // anchor: '50% 100%',
                flex: 1,
                store: Ext.create('MyApp.store.usuarios.s_Usuarios'),
                tbar: [
                    {xtype: 'button', text: 'Ingresar', handler: 'formulario'},
                    {xtype: 'button', text: 'recargar', handler: 'recargar'}
                ],
                columns: [
                    {text: 'Id', dataIndex: 'id', width: 30},
                    {text: 'Name', dataIndex: 'name', width: 200},
                    {text: 'Email', dataIndex: 'email', width: 250},
                    {text: 'Phone', dataIndex: 'phone', width: 120}
                ],
                height: 200,
                listeners: {
                    // select: 'onSelect'
                    select: 'getUserSelected'
                }
            },
            {
                xtype: 'form',
                name: 'formUsuarios',
                title: 'Usuarios',
                // anchor: '40% 100%',
                flex: 1,
                height: 200,
                // layout: 'anchor',
                // store: Ext.create('MyApp.store.usuarios.s_Usuarios'),
                // tbar: [
                //     {xtype: 'button', text: 'Ingresar', handler: 'formulario'},
                //     {xtype: 'button', text: 'recargar', handler: 'recargar'}
                // ],
                items:[{
                    xtype: 'textfield',
                    name: 'id',
                    fieldLabel: 'id',
                },
                {
                    xtype: 'textfield',
                    name: 'name',
                    fieldLabel: 'Nombre',
                },
                {
                    xtype: 'textfield',
                    name: 'email',
                    fieldLabel: 'Email',
                },
                {
                    xtype: 'textfield',
                    name: 'phone',
                    fieldLabel: 'Telefono',
                }],
                listeners: {
                    select: 'onSelect'
                }
            },

        ];
        this.callParent(arguments);
        // console.log(arguments);
    }
});