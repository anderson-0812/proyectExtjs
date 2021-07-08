Ext.define('MyApp.store.clases.s_Clases', {
    extend: 'Ext.data.Store',

    fields: [
        {name:'id',type:'int'}, 
        {name:'nombreClase'},
        {name:'materia'},
        {name:'idUsuario'},
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'php/Clases/read.php',
            create: 'php/Clases/create.php',
            update: 'php/Clases/update.php'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
        write: {
            type: 'json',
            root: 'clases',
            writeAllFields: true
        },
        simpleSortMode: true
        
    },
    sorters: [{
         property: 'nombreClase',
         direction: 'ASC'
     }]
});