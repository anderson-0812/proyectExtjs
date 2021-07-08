<?php

function EJECUTAR_SQL($mysqli, $sql) {
    $stmt = $mysqli->prepare($sql);
    if (!$stmt) {
        return array('success' => false, 'message' => "ERROR EN EL SQL: $sql", "filas" => 0);
    }
    $stmt->execute();
    if ($stmt->affected_rows > 0) {
        return array('success' => true, 'message' => "SOLICITUD REALIZADA CON ÉXITO.", "id" => $stmt->insert_id, "filas" => $stmt->affected_rows);
    } elseif ($stmt->affected_rows === 0) {
        return array('success' => false, 'message' => "SQL: $sql", "error" => "NO SE HAN DETECTADO CAMBIOS.", "filas" => -1, "stmt" => $stmt);
    } else {
        return array('success' => false, 'message' => "SQL: $sql", "error" => "ERROR: " . $stmt->error, "filas" => -1, "stmt" => $stmt);
    }
}

function EJECUTAR_SELECT($mysqli, $sql) {
    $result = $mysqli->query($sql);
    if (!isset($result->num_rows)) {
        return $data->success = false;
    }
    return $result;
}

function getEncryption($text) {
    $salt = "KR@D@C";
    return md5(md5(md5($text) . md5($salt)));
}

function errorLogin($text) {
    echo json_encode(array('success' => false, 'message' => $text, 'url' => '../../index.php'));
}

function GetUserIP() {
    if (isset($_SERVER)) {
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
            return $_SERVER["HTTP_X_FORWARDED_FOR"];
        }
        if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            return $_SERVER["HTTP_CLIENT_IP"];
        }
        return $_SERVER["REMOTE_ADDR"];
    }
    if (getenv('HTTP_X_FORWARDED_FOR')) {
        return getenv('HTTP_X_FORWARDED_FOR');
    }
    if (getenv('HTTP_CLIENT_IP')) {
        return getenv('HTTP_CLIENT_IP');
    }
    return getenv('REMOTE_ADDR');
}

function GetUserHost() {
    if (isset($_SERVER)) {
        if (isset($_SERVER["HTTP_X_FORWARDED_FOR"])) {
            return gethostbyaddr($_SERVER["HTTP_X_FORWARDED_FOR"]);
        }
        if (isset($_SERVER["HTTP_CLIENT_IP"])) {
            return gethostbyaddr($_SERVER["HTTP_CLIENT_IP"]);
        }
        return gethostbyaddr($_SERVER["REMOTE_ADDR"]);
    }
    if (getenv('HTTP_X_FORWARDED_FOR')) {
        return gethostbyaddr(getenv('HTTP_X_FORWARDED_FOR'));
    }
    if (getenv('HTTP_CLIENT_IP')) {
        return gethostbyaddr(getenv('HTTP_CLIENT_IP'));
    }
    return gethostbyaddr(getenv('REMOTE_ADDR'));
}

function isPerfilAsignado($perfil) {
    foreach ($_SESSION["PERFILES"] as $pefil) {
        if ($pefil['idPerfil'] == $perfil) {
            return TRUE;
        }
    }
    return FALSE;
}
