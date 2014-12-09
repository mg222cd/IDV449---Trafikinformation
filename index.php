<?php
    require_once("Cache.php");
    $cacheController = new CacheController();
    $cacheController->handleCache();
?>
<!DOCTYPE html>
<html>
<head>
  <title>Labb3 | Mashup</title>
  <meta charset = 'UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1'>
  <!-- Bootstrap -->
  <link href='./BasicStyles/Bootstrap/css/bootstrap.min.css' rel='stylesheet'>
  <!-- My style -->
  <link rel='stylesheet' type='text/css' href='./BasicStyles/Style.css'>
  <!-- Google maps key -->
  <script type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDQJxS29ljc_bbRXhzBGxGI6Nzrv2v273E&sensor=false">
  </script>  
</head>
<body>
<div class='container'>
  <header>
    <h1>maSHuP</h1>
    <p class='tight'>Laboration 3<p>
  </header>
    <div id='map-canvas'>
    </div>
</div>
<!-- Application scripts -->
  <script src='Script.js'></script>
</body>
</html>