<?php
//libro
//extract($_GET);
//extract($_POST);
if (!$mysqli = getConectionDb()) {
    echo "Error de conección";
} else {
    $consultaSql = "SELECT id, titulo, autor, fecha FROM bd_ejercicio.libros";
//    echo $consultaSql;
    $result = $mysqli->query($consultaSql);
   

   $arreglo = array();
    while ($myrow = $result->fetch_assoc()) {
        $arreglo[] = array(
            'id' => intval($myrow["id"]),
            'titulo' => $myrow["titulo"],
            'autor' => $myrow["autor"],
            'fecha' => $myrow["fecha"],
        );
    }

    echo json_encode(array('success' => TRUE, 'data' => $arreglo));
    //echo $arreglo;
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
