Ext.define('MyApp.view.libros.v_Libros', {
    extend: 'Ext.panel.Panel',
    xtype: 'libros',
    controller: 'c_Libros',
    height: HEIGT_VIEWS,
    layout: 'anchor',
    requires: [
        'MyApp.view.libros.c_Libros',
        'MyApp.store.libros.s_Libros',
    ],
    listeners: {
        afterrender: 'onrender'//despues de caragr la vista
    },
    initComponent: function () {
        var STORE_LIBROS = Ext.create('MyApp.store.libros.s_Libros');        
        this.items = [
            
            {
                xtype: 'panel',
                title: 'Libros',
//                height: 100,
                items: [
 {
                        xtype: 'grid',
                        name: 'gridLibros',
                        height: HEIGT_VIEWS - 10,
                        plugins: [{ptype: 'gridfilters'}],
                        bufferedRenderer: false,
                        store: STORE_LIBROS,
                        viewConfig: {
                            deferEmptyText: false,
                            enableTextSelection: true,
                            preserveScrollOnRefresh: true,
                            listeners: {
                                loadingText: 'Cargando...'
                            }, loadMask: true,
                            emptyText: '<center><h1 style="margin:20px">No existen resultados</h1></center>'    
                        },
                        tbar: [
                            {xtype: 'button', text: 'Nuevo Registro', handler: 'formulario'},
                            {xtype: 'button', text: 'Recargar', handler: 'recargar'},
                            
                        ],
                        features: [
                            {
                                ftype: 'grouping',
                                groupHeaderTpl: '{name}',
                                hideGroupedHeader: true,
                                enableGroupingMenu: true
                            }
                        ],
                        columns: [
                            Ext.create('Ext.grid.RowNumberer', {header: '#', width: 30, align: 'center'}),
                            {dataIndex: 'titulo', text: 'Titulo del libro', tooltip: "Titulo del libro", filter: true, flex: 1, sortable: true},
                            {dataIndex: 'autor', text: 'Autor', tooltip: "Autor", filter: true, flex: 1, sortable: true},
                            {dataIndex: 'fecha', text: 'Fecha de publicacion', tooltip: "fecha de publicación", filter: true, flex: 2, sortable: true},
//                            {dataIndex: 'habilitado', text: 'Habilitado', tooltip: "Habilitado", filter: true, flex: 1, sortable: true, renderer: formatEstadoRegistro},
                            {dataIndex: 'id', text: "ID", tooltip: "ID", filter: true, flex: 1, sortable: true, hidden: true}
                        ],
                        listeners: {
                            select: 'onSelect',
//                            rowdblclick: showAuditoria
                        },
                    }
                ]

            }
        ];
        this.callParent(arguments);
    }

});
