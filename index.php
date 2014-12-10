<?php
    //require_once("Cache.php");
    $api_key = file_get_contents('api_key.txt');
    //$cacheController = new CacheController();
    //$cacheController->handleCache();
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
</head>
<body>
<div class='container'>
  <header>
    <h1>TRAFIKSTÖRNINGAR</h1>
    <p class='tight'>WebbteknikII - Laboration 3 - Mashups<p>
  </header>
  <!-- Menu -->
  <div class='col-xs-12 col-sm-4 menu'>
    <div class='pull-top panel panel-info' >
        <h3>Trafikrapporter</h3></div>
        <div class="list-group" id="categoryType">
          <a class="list-group-item" href="#" data-category-type="4"><i class="fa fa-home fa-fw"></i>&nbsp; Alla Kategorier</a>
          <a class="list-group-item" href="#" data-category-type="0"><i class="fa fa-car fa-fw"></i>&nbsp; Vägtrafik</a>
          <a class="list-group-item" href="#" data-category-type="1"><i class="fa fa-bus fa-fw"></i>&nbsp; Kollektivtrafik</a>
          <a class="list-group-item" href="#" data-category-type="2"><i class="fa fa-exclamation-triangle fa-fw"></i>&nbsp; Planerad störning</a>
          <a class="list-group-item" href="#" data-category-type="3"><i class="fa fa-cube fa-fw"></i>&nbsp; Övrigt</a>
        </div>
        <div id="trafficListing" class="panel-body"></div>
    </div>
  </div>
  <!-- Map -->
  <div class="col-xs-12 col-sm-8 map">
    <div id='map-canvas'></div>
  </div>
</div>
<!-- Application scripts -->
<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=<?= $api_key ?>&sensor=false"></script>
<script src='Script.js'></script>
<script src='Map.js'></script>
</body>
</html>