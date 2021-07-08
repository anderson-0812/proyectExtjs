Ext.define('MyApp.store.Navegacion', {
    extend: 'Ext.data.TreeStore',
    storeId: 'Navegacion',
    fields: [{
            name: 'text'
        }],
    root: {
        expanded: true,
        children: [
            {
                'id': 'menu',
                'iconCls': 'x-fa fa-bars',
                'viewType': '',
                'inicio': '',
                'text': 'Menú',
                'name': '',
                'PATH': '',
                'leaf': true,
                'selectable': false,
                'rowCls': 'menuPrincipal',
                'permisos': ''
            },
            {
                text: 'Usuarios',
                iconCls: 'x-fa fa-ban',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'usuarios',
                leaf: true
            },
            {
                text: 'Clases',
                iconCls: 'x-fa fa-book',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'clases',
                leaf: true
            },
            {
                text: 'Libros',
                iconCls: 'x-fa fa-book',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'libros',
                leaf: true
            },
            {
                text: 'Libros',
                iconCls: 'x-fa fa-pencil',
                rowCls: 'nav-tree-badge nav-tree-badge-new',
                viewType: 'libros',
                leaf: true
            }
            
        ]
    }
});