<?php
  $url = $_REQUEST['url'];
  $ch = curl_init($url);

$pageurl=strtok($url,'?');
$querystring=strtok('?');
$ch_encoded=curl_escape($ch, $querystring);

echo $pageurl.'?'.$ch_encoded;

echo "<br><br>\n\n";

curl_setopt($ch, CURLOPT_URL, $pageurl.'?'.$ch_encoded);

  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

  $result = curl_exec($ch);
  echo $result;


/*
	$url = $_REQUEST['url'];

	$ch = curl_init($url);

	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$result = curl_exec($ch);

	echo $result;
*/



?>