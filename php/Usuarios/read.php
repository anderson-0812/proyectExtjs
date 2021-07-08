<?php
//libro
extract($_GET);
extract($_POST);
if (!$mysqli = getConectionDb()) {
    echo "{success: false, message: '$mysqli'}";
} else {
    $consultaSql = "SELECT id, name, email, phone FROM bd_ejercicio.usuario";
//    echo $consultaSql;
    $result = $mysqli->query($consultaSql);
   

   $arreglo = array();
    while ($myrow = $result->fetch_assoc()) {
        $arreglo[] = array(
            'id' => intval($myrow["id"]),
            'name' => $myrow["name"],
            'email' => $myrow["email"],
            'phone' => $myrow["phone"],
        );
    }

    echo json_encode(array('success' => TRUE, 'data' => $arreglo));
//    echo $arreglo;
     $mysqli->close();
}

function getConectionDb() {
    /* DATOS DE MI SERVIDOR */
    $db_name = "bd_ejercicio";
    $db_host = "127.0.0.1";
    $db_user = "root";
    $db_password = "1234";
    $mysqli = new mysqli($db_host, $db_user, $db_password, $db_name,3306);
    if ($mysqli->connect_errno) {
        echo "Fallo al conectar a MySQL: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
    }
    // echo $mysqli;
    return ($mysqli->connect_errno) ? false : $mysqli;
}
