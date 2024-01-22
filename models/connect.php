<?php
    global $pdo;

    try {
        $pdo = new PDO("mysql:dbname=condutiva;host=localhost", "root", "");
    } catch (PDOException $e) {
        throw "Erro durante a coneccao com a base de dados ".$e->getMessage();
        exit();
    }

?>