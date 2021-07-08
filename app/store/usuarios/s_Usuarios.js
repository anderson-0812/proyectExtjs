Ext.define('MyApp.store.usuarios.s_Usuarios', {
    extend: 'Ext.data.Store',
    autoLoad: true,
    fields: ['id','name', 'email', 'phone'],
    proxy: {
        type: 'ajax',
        api:{
            read: 'php/Usuarios/read.php',
            create: 'php/Usuarios/create.php',
            update: 'php/Usuarios/update.php'
        },
        reader: {
            type: 'json',
            root: 'data',
            successProperty: 'success'
        },
        write:{
            type: 'json',
            root: 'users',
            writeAllFields: true
        }
    }
});

