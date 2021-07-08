
<?php

extract($_GET);
extract($_POST);
if (!$mysqli = getConectionDb()) {
    echo "{success: false, message: '$errorConexion'}";
} else {
    $consultaSql = "SELECT id, nombre_clase,materia,id_usuario FROM bd_ejercicio.clases";
//    echo $consultaSql;
    $result = $mysqli->query($consultaSql);
   

   $arreglo = array();
    while ($myrow = $result->fetch_assoc()) {
        $arreglo[] = array(
            'id' => intval($myrow["id"]),
            'nombreClase' => $myrow["nombre_clase"],
            'materia' => $myrow["materia"],
            'idUsuario' => $myrow["id_usuario"],
        );
    }

    echo json_encode(array('success' => TRUE, 'data' => $arreglo));
//    echo $arreglo;
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
