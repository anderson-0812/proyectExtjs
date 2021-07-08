var MODULO_CLASES;
Ext.define('MyApp.view.clases.c_Clases', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.c_Clases',
    onrender: function (panel) {
        MODULO_CLASES = panel;
    },
    cararMapa: function () {
        mapboxgl.accessToken = 'pk.eyJ1Ijoia2F0aWVuY2lhcCIsImEiOiJjamN1a3VkbTUxMHllMnduemQ3OTh1ajB5In0.DDiBB1jMawcG_4IRpHNjiQ';
        var map = new mapboxgl.Map({
            container: 'map', // container id
            style: 'mapbox://styles/mapbox/streets-v9', // stylesheet location
            center: [-74.50, 40], // starting position [lng, lat]
            zoom: 9 // starting zoom
        });
    },
    //editar
    onSelect: function (thiso, selected, eOpts) {
        var i = selected.get('id');
        var ventana = Ext.create('Ext.window.Window', {
            //var id=1;
            title: 'Hello',
            height: 200,
            width: 400,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    name: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'nombreClase',
                            fieldLabel: 'Nombre Clase',
                            label: 'Nombre Clase'
                        },
                        {
                            xtype: 'textfield',
                            name: 'materia',
                            fieldLabel: 'Materia',
                            label: 'Materia'

                        },
                        {
                            xtype: 'numberfield',
                            name: 'idUsuario',
                            fieldLabel: 'Id Usuario',
                            label: 'Id Usuario'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Guardar',
                    handler: function () {//handler siepre sera una funcion
                        var form = ventana.down('[name=form]');
                        var values = form.getValues();
                        console.warn(values),
                                console.warn(i),
                                selected.set(values), //selecciona las variables 
                                ventana.close(), //cierre de ventanas
                                MODULO_CLASES.down('[name=gridClases]').getStore().sync();
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function () {
                        ventana.close();
                    }

                }
            ]
        }).show();

        ventana.down('[name=form]').getForm().loadRecord(selected);



    },
    formulario: function () {

        var ventana2 = Ext.create('Ext.window.Window', {
            title: 'Ingresar Clase',
            height: 200,
            width: 400,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    name: 'form_clases',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'nombreClase',
                            fieldLabel: 'Nombre Clase',
                            label: 'Nombre Clase'
                        },
                        {
                            xtype: 'textfield',
                            name: 'materia',
                            fieldLabel: 'Materia',
                            label: 'Materia'

                        },
                        {
                            xtype: 'numberfield',
                            name: 'idUsuario',
                            fieldLabel: 'Id Usuario',
                            label: 'Id Usuario'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Guardar',
                    scope: this,
                    // action: 'save',
                    handler: function () {//handler siepre sera una funcion
                        var form = ventana2.down('[name=form_clases]');
                        var values = form.getValues();
                        console.warn(values),
                                ventana2.close(), //cierre de ventanas        
                                MODULO_CLASES.down('[name=gridClases]').getStore().insert(0, values);
                        MODULO_CLASES.down('[name=gridClases]').getStore().sync();

                        // Ext.Msg.alert('Success!', 'Event listener attached by .on');
                    }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: function () {
                        ventana.close();
                    }
                }
            ]
        }).show();
    },
    recargar: function () {
        MODULO_CLASES.down('[name=gridClases]').getStore().reload();//recarga datos originales
    }
});

