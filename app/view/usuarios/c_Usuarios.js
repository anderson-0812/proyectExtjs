var MODULO_USUARIO;
Ext.define('MyApp.view.usuarios.c_Usuarios', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.c_Usuarios',
    onrender:function (panel) {
        MODULO_USUARIO=panel;
        console.log(panel);
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
        alert(selected.get('name'))
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
                            name: 'name',
                            fieldLabel: 'Nombre',
                            label: 'name'
                        },
                        {
                            xtype: 'textfield',
                            name: 'email',
                            fieldLabel: 'Email',
                            label: 'email'

                        },
                        {
                            xtype: 'textfield',
                            name: 'phone',
                            fieldLabel: 'Telefono',
                            label: 'phone'
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
                        MODULO_USUARIO.down('[name=grid]').getStore().sync();
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
    // Extraigo datos de la rila seleccionada y muestro en el formulario
    getUserSelected: function (thiso, selected, eOpts){
        var formUsuarios = MODULO_USUARIO.down('[name=formUsuarios]');
        formUsuarios.loadRecord(selected);
    },
    crearUsuario: function (){
        console.log('Crear usuario');
        var form = MODULO_USUARIO.down('[name=formUsuarios]');
        var values = form.getValues();
        console.warn(values),
        MODULO_USUARIO.down('[name=grid]').getStore().insert(0, values);
        MODULO_USUARIO.down('[name=grid]').getStore().sync();
    },
    actualizarUsuario: function () {
        console.log('Actualziar usuario');

        var form = MODULO_USUARIO.down('[name=formUsuarios]');

        var values = form.getValues();
        var record = form.getRecord();
        record.set(values);

        console.warn(values);
        console.warn(record);

        if (form.isValid()) { // make sure the form contains valid data before submitting
            form.updateRecord(record); // update the record with the form data
            record.save({ // save the record to the server
                success: function(user) {
                    Ext.Msg.alert('Correcto', 'Usuario Actualziado.')
                },
                failure: function(user) {
                    Ext.Msg.alert('Error', 'Fallo de la actualizacion.')
                }
            });
        }
        // MODULO_USUARIO.down('[name=grid]').getStore().reload();

        // MODULO_USUARIO.down('[name=grid]').getStore().update(record);
        MODULO_USUARIO.down('[name=grid]').getStore().sync();

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
                            name: 'name',
                            fieldLabel: 'Nombre'
                        },
                        {
                            xtype: 'textfield',
                            name: 'email',
                            fieldLabel: 'Email'
                        },
                        {
                            xtype: 'textfield',
                            name: 'phone',
                            fieldLabel: 'Telefono'
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
        console.log(MODULO_USUARIO.down('[name=grid]').getStore().reload());//recarga datos originales
        MODULO_USUARIO.down('[name=grid]').getStore().reload();//recarga datos originales
    }
});

