<?php

/* VARIABLE DE AMBIENTE */
$PRODUCCION = 1; //1 PRODUCCION
$DESARROLLO = 0; //0 DESARROLLO
$AMBIENTE = $DESARROLLO;
/* VARIABLE DE IDS DE SISTEMA */
$ID_APP_BUS = 1; //1 SIMERT
/* VARIABLE DEL SISTEMA */
$SISTEMA = $ID_APP_BUS; //SI ES: 1 CNT Y SI ES: 2 Simert
$VERSION = "0.0.43D";
$NOMBRE_SISTEMA = ""; //NOMBRE DEL SISTEMA, para redericcionar las imagenes
$NOMBRE_APP = ""; //NOMBRE DE LA APLICACION <TITLE>
/* RUTA DE IMAGENES */
$URL_IMG = "img/";
$URL_IMG_SKINS = $URL_IMG . "skins/";
/* NAVS */
$NAV_1 = "";
$NAV_2 = "";
$NAV_3 = "";
/* VARIABLES DE ERROR */
$MSJ_NO_EXIST_RESULT = "NO EXISTEN RESULTADOS";
$MSJ_ERROR_CONEXION = "PROBLEMAS DE CONEXIÓN CON EL SERVIDOR";
$LIMITE_REGISTROS = 50;
$LIMITE_REGISTROS_COMBO = 25;
/* PERFILES */
$PERFIL_CLIENTE = 1;
$PERFIL_EMPRESARIAL = 2;
$PERFIL_CEO = 3;
$PERFIL_DISTRIBUCION = 4;