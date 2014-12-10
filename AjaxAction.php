<?php
require_once('Cache.php');

$cache = new CacheController();

	if(isset($_GET['action'])) {
		switch ($_GET['action']) {
			case 'handleCache':
				echo $cache->handleCache();
				break;
		}
	}