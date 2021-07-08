Ext.define('MyApp.view.main.v_Main', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.v_Main',
    requires: [
        'Ext.button.Segmented',
        'Ext.list.Tree',
        'MyApp.view.main.Badge',
        'MyApp.view.main.c_Main',
        'MyApp.view.main.MainContainerWrap',
        'MyApp.view.main.MainModel',
        'MyApp.view.404.v_SinModulo',
        'MyApp.view.usuarios.v_Usuarios',
        'MyApp.view.clases.v_Clases',
        'MyApp.view.libros.v_Libros',
    ],
    controller: 'main',
    viewModel: 'main',
    cls: 'sencha-dash-viewport',
    itemId: 'v_Main',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
    listeners: {
        render: 'onMainViewRender'
    },
    items: [
        {
            xtype: 'toolbar',
            cls: 'sencha-dash-dash-headerbar shadow',
            height: 64,
            itemId: 'headerBar',
            id: 'toolbarMain',
            style: {
                background: COLOR_SISTEMA2,
                color: 'white',
                border: '1px solid #36beb3'
            },
            items: [
                {
                    xtype: 'component',
                    reference: 'senchaLogo',
                    cls: 'sencha-logo',
                    html: '<div class="main-logo"><img src="' + IMG_LOGO + '" width="185"><div class="titulo">' + APP + '</div><!--<div class="subtitulo">' + TITULO_MAIN_APP + '</div>--></div>',
                    width: 150
                },
//                {
//                    margin: '0 0 0 8',
//                    ui: 'header',
//                    xtype: 'button',
//                    iconCls: 'x-fa fa-navicon',
//                    id: 'main-navigation-btn',
//                    handler: 'onToggleNavigationSize'
//                },
                '->',
                {
                    iconCls: 'x-fa fa-search',
                    ui: 'header',
                    href: '#searchresults',
                    hrefTarget: '_self',
                    tooltip: 'See latest search'
                },
                {
                    iconCls: 'x-fa fa-envelope',
                    ui: 'header',
                    href: '#email',
                    hrefTarget: '_self',
                    tooltip: 'Check your email'
                },
                {
                    iconCls: 'x-fa fa-question',
                    ui: 'header',
                    href: '#faq',
                    hrefTarget: '_self',
                    tooltip: 'Help / FAQ\'s'
                },
                '->',
                {
                    xtype: 'button',
                    id: 'btnNotificaciones',
                    iconCls: 'x-fa fa-globe',
                    ui: 'header',
                    tooltip: 'Ver notificaciones',
                    badgeText: 0,
                    cls: 'gray-badge',
                    arrowVisible: false,
                    menu: [],
                    consultando: false,
                    seHizoClick: false,
                    handler: function (btn) {
                        if (btn.menu.items.items.length > 0) {
                            if (btn.seHizoClick) {
                                btn.seHizoClick = false;
                            } else {
                                btn.seHizoClick = true;
                                cargarNotificaciones(btn, true);
                            }
                        }
                    },
                    hidden: true
                },
                {
                    xtype: 'label',
                    html: '<div class = "subtitulo">' + FECHA_ACTUAL.getDay() + ', ' + FECHA_ACTUAL.getDate() + ' de ' + FECHA_ACTUAL.getMonth() + '&nbsp&nbsp&nbsp&nbsp&nbsp<span class="barra">|</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span id="reloj" style="font-weight: bold;">00:00:00</span>&nbsp&nbsp&nbsp&nbsp&nbsp' + '</div>'
                },
                ' ',
                {
                    xtype: 'button',
                    id: 'btnAlarmas',
                    iconCls: 'x-fa fa-bell',
                    ui: 'header',
                    tooltip: 'Ver Alarmas',
                    badgeText: 0,
                    cls: 'gray-badge',
                    arrowVisible: false,
                    menu: [],
                    handler: function () {
                        verAlarmas();
                    },
                    hidden: true
                },
                {
                    xtype: 'container',
                    width: '1%'
                }
            ]
        },
        {
            xtype: 'maincontainerwrap',
            id: 'main-view-detail-wrap',
            reference: 'mainContainerWrap',
            flex: 1,
            items: [
                {
                    xtype: 'treelist',
                    reference: 'navigationTreeList',
                    id: 'navigationTreeList',
                    ui: 'navigation',
                    store: 'Navegacion',
                    width: 60,
                    expandedWidth: WIDTH_NAVEGACION,
                    expanderFirst: false,
                    expanderOnly: false,
                    micro: true,
                    listeners: {
                        itemClick: 'onClickMenu',
                        selectionchange: 'onNavigationTreeSelectionChange'
                    }
                },
                {
                    xtype: 'container',
                    flex: 1,
                    reference: 'mainCardPanel',
                    cls: 'sencha-dash-right-main-container',
                    itemId: 'contentPanel',
                    layout: {
                        type: 'card',
                        anchor: '100%'
                    }
                }
            ]
        }
    ]
});
