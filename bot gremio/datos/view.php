<?php
//conect

function conectDB () {
    $db = new PDO("mysql:host=localhost;dbname=noticias", "pma", "");
    return $db;
    };
//get
     function getResources () {
        $db = conectDB();
        $solicitud = $db->prepare("SELECT * FROM datos");
       $solicitud->execute();
       $resultado = $solicitud->fetchAll(PDO::FETCH_NUM);
       return $resultado;
     }

//ordenando
   function selectIndi($resultado,$concret) {
    $datos = date("Y-m-d");
    $r = 0;
    $arr = array();
    foreach($resultado as $valor) {
     if  (preg_match("/$datos/", $valor[0]) == 1) {
      print_r($resultado[$r]);
      $arr[$r] = $resultado[$r];
      if ($r == $concret) {
          break;
      }
      $r++;
     }
    }
   }

   if ($_POST) {
      $number = $_POST["number"];
    $resultado = getResources();
    selectIndi($resultado, $numbers);
}
?>