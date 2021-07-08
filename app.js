/* global Ext */
Ext.application({
    name: 'MyApp',
    appFolder: 'app',
    requires: [
        'MyApp.view.main.v_Main',
        'MyApp.view.main.c_Main',
        'MyApp.view.main.MainContainerWrap',
        'MyApp.view.main.MainModel'
    ],
    stores: ['Navegacion'],
    mainView: 'MyApp.view.main.v_Main',
    launch: function () {
    }
});