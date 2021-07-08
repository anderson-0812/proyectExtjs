<?php

include 'version.php';
$_SESSION['PERFILES_ASIGNADOS'] = [];
//VARIABLES DE SERVICIOS REST
switch ($AMBIENTE) {
    case $DESARROLLO:
        switch ($SISTEMA) {
            case $ID_APP_BUS:
                $NOMBRE_SISTEMA = "bus";
                $BANNER = $URL_IMG_SKINS . $NOMBRE_SISTEMA . "/banner.png";
                $APP_ICONO = $URL_IMG_SKINS . $NOMBRE_SISTEMA . "/launcher.png";
                $IMG_CARGANDO = $URL_IMG_SKINS . $NOMBRE_SISTEMA . "/logo.png";
                $NOMBRE_APP = "SIMERT";
                $PLACEHOLDER = "Usuario";
                $COLOR_FONDO = 'white';
                $SCRIPT_ESTILOS = '<link href="css/main.css?' . $VERSION . '" rel="stylesheet" type="text/css"/>';
                break;
            default :
                header("Location: 404.php");
                break;
        }
        $GLOBALS['DB_NAME_HISTORICO'] = $DB_NAME_HISTORICO = "";
        $GLOBALS['DB_NAME'] = $DB_NAME = "prueba";
        $GLOBALS['DB_HOST'] = $DB_HOST = "localhost";
        $GLOBALS['DB_USER'] = $DB_USER = "root";
        $GLOBALS['DB_PASSWORD'] = $DB_PASSWORD = "";
        $PUERTO = 0;
        $URL_SERVICIO = '' . $PUERTO . '/';
        break;
}
session_start();
if (isset($_SESSION["AMBIENTE"])) {
    $_SESSION["AMBIENTE"] = $AMBIENTE;
} else {
    $_SESSION["AMBIENTE"] = $AMBIENTE;
    $_SESSION["IS_SESSION"] = 0;
    $_SESSION["URL_SISTEMA"] = "";
}

function getConectionDb() {
    /* Datos de servidor de base de datos */
    if ($_SESSION["AMBIENTE"] === 0) {
        $db_name = $GLOBALS['DB_NAME']; //NOMBRE DE LA BASE DE DATOS
        $db_host = $GLOBALS['DB_HOST']; //DESARROLLO
        $db_user = $GLOBALS['DB_USER']; //DESARROLLO
        $db_password = $GLOBALS['DB_PASSWORD']; //DESARROLLO 
        return conectBase($db_host, $db_user, $db_password, $db_name, 3306);
    } else if ($_SESSION["AMBIENTE"] === 1) {
        $db_host = $GLOBALS['DB_HOST']; //PRODUCCION
        $db_name = $GLOBALS['DB_NAME']; //NOMBRE DE LA BASE DE DATOS
        $db_user = $GLOBALS['DB_USER']; //USARIO DE PRODUCCION
        $db_password = $GLOBALS['DB_PASSWORD']; //PRODUCCION   
        return conectBase($db_host, $db_user, $db_password, $db_name, 3306);
    } else {
        echo json_encode(array('success' => false, 'message' => 'EL AMBIENTE DE FUNCIONAMIENTO NO ESTÁ CONFIGURADO CORRECTAMENTE.', 'url' => '../../index.php'));
        return;
    }
}

function conectBase($db_host, $db_user, $db_password, $db_name, $puerto) {
    $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name, $puerto);
    if ($mysqli->connect_errno) {
        echo json_encode(array('success' => false, 'message' => "ERROR EN LA CONEXION A BASE DE DATOS"));
        return false;
    }
    $mysqli->set_charset("utf8mb4");
    return $mysqli;
}
