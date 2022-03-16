<?php
function conectDB () {
$db = new PDO("mysql:host=localhost;dbname=noticias", "pma");
return $db;
};
$db = conectDB();
    function getNotice ($enl) {
    $enlace = curl_init($enl);
    curl_setopt($enlace, CURLOPT_RETURNTRANSFER, true);
    $contenido = curl_exec($enlace);
    $contenido = json_decode($contenido, true);
    $abr1 = $contenido["results"];
    return $abr1;
    }
$notic = getNotice("https://newsdata.io/api/1/news?apikey=pub_5439347feb02db3285918a7da99aeba6e4d1&language=es");
function ingresar ($ini, $db) {
    foreach($ini as $valor) {
        $fecha = $valor["pubDate"];
        $info = json_encode($valor,JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
        $insert = $db->prepare("INSERT INTO datos (noticia,fecha) VALUES (?,?)");
    $insert->execute(array($info,$fecha));
    } 

}
ingresar($notic, $db);
?>