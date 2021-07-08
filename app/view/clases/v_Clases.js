Ext.define('MyApp.view.clases.v_Clases', {
    extend: 'Ext.panel.Panel',
    xtype: 'clases',
    controller: 'c_Clases',
    height: HEIGT_VIEWS,
    layout: 'anchor',
    requires: [
        'MyApp.view.clases.c_Clases',
//        'MyApp.store.clases.s_Clases',
    ],
    listeners: {
        afterrender: 'onrender'//despues de caragr la vista
    },
    initComponent: function () {
        var STORE_CLASES = Ext.create('MyApp.store.clases.s_Clases');        
        this.items = [
            
            {
                xtype: 'panel',
                title: 'Clases',
//                height: 100,
                items: [
 {
                        xtype: 'grid',
                        name: 'gridClases',
                        height: HEIGT_VIEWS - 10,
                        plugins: [{ptype: 'gridfilters'}],
                        bufferedRenderer: false,
                        store: STORE_CLASES,
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
                            {dataIndex: 'nombreClase', text: 'Nombre Clase', tooltip: "Nombre Clase", filter: true, flex: 1, sortable: true},
                            {dataIndex: 'materia', text: 'Materia', tooltip: "Materia", filter: true, flex: 1, sortable: true},
                            {dataIndex: 'idUsuario', text: 'Id Usuario', tooltip: "id Usuario", filter: true, flex: 2, sortable: true},
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
