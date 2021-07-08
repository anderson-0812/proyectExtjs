Ext.define('MyApp.store.libros.s_Libros', {
    extend: 'Ext.data.Store',

    fields: [
        {name:'id',type:'int'}, 
        {name:'titulo'},
        {name:'autor'},
        {name:'fecha'},
    ],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'php/Libros/read.php',
            create: 'php/Libros/create.php',
            update: 'php/Libros/update.php'
        },
        reader: {
            type: 'json',
            rootProperty: 'data',
            successProperty: 'success'
        },
        simpleSortMode: true
//        write: {
//            type: 'json',
//            root: 'clases',
//            writeAllFields: true
//        }
    }
});