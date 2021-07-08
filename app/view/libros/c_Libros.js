var MODULO_LIBRO;
Ext.define('MyApp.view.libros.c_Libros', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.c_Libros',
    onrender:function (panel) {
        MODULO_LIBRO=panel;
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
    onSelect: function (thiso, selected, eOpts) {
        //alert(selected.get('name'))
        var i=selected.get('id');
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
                            name: 'titulo',
                            fieldLabel: 'Titulo',
                            label: 'titulo'
                        },
                        {
                            xtype: 'textfield',
                            name: 'autor',
                            fieldLabel: 'Autor',
                            label: 'autor'

                        },
                        {
                            xtype: 'textfield',
                            name: 'fecha',
                            fieldLabel: 'Fecha',
                            label: 'fecha'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Guardar',
                    handler: function(){//handler siepre sera una funcion
                        var form = ventana.down('[name=form]');
                        var values = form.getValues();
                        console.warn(values),
                        console.warn(i),
                        selected.set(values),//selecciona las variables 
                        ventana.close(),//cierre de ventanas
                        MODULO_LIBRO.down('[name=gridLibros]').getStore().sync();
            }
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: this.close
                }
            ]
        }).show();
        ventana.down('[name=form]').loadRecord(selected);
    },
    formulario: function () {
        Ext.create('Ext.window.Window', {
            title: 'Hello',
            height: 200,
            width: 400,
            layout: 'fit',
            items: [
                {
                    xtype: 'form',
                    items: [
                        {
                            xtype: 'textfield',
                            name: 'titulo',
                            fieldLabel: 'Titulo'
                        },
                        {
                            xtype: 'textfield',
                            name: 'autor',
                            fieldLabel: 'Autor'
                        },
                        {
                            xtype: 'textfield',
                            name: 'fecha',
                            fieldLabel: 'Fecha'
                        }
                    ]
                }
            ],
            buttons: [
                {
                    text: 'Guardar',
                    action: 'save'
                },
                {
                    text: 'Cancelar',
                    scope: this,
                    handler: this.close
                }
            ]
        }).show();
    },
    recargar: function(){
        MODULO_LIBRO.down('[name=gridLibros]').getStore().reload();//recarga datos originales
    }
});



