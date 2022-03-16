<?php
$db = new PDO("mysql:host=localhost;dbname=noticias", "pma");
$delete = $db->prepare("DELETE FROM datos WHERE fecha = '0000-00-00 00:00:00'");
$delete->execute();