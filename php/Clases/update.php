<?php

$data = json_decode(file_get_contents('php://input'));

if (!$mysqli = getConectionDb()) {
    echo "{success: false, message: '$errorConexion'}";
} else {

  $sql_update = "UPDATE clases SET ";
    $sql_update .= (isset($data->nombreClase)) ? "nombre_clase = '$data->nombreClase', " : "";
    $sql_update .= (isset($data->materia)) ? "materia = '$data->materia', " : "";
    $sql_update .= "id_usuario = '1' ";
    $sql_update .= " WHERE id = " . $data->id;



    //echo $sql_update;
    $result = $mysqli->query($sql_update);
     $mysqli->close();
 }


function getConectionDb() {
    /* DATOS DE MI SERVIDOR */
    $db_name = "bd_ejercicio";
    $db_host = "localhost";
    $db_user = "root";
    $db_password = "";
    @$mysqli = new mysqli($db_host, $db_user, $db_password, $db_name);
    return ($mysqli->connect_errno) ? false : $mysqli;
}



