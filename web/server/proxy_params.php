<?php

	//$url = array_shift($_REQUEST);
  //echo "url: $url<br><br>\n";

  //$url = $_GET['url'];
  $endpoint = $_GET['endpoint'];
  $params_encoded = $_GET['params_encoded'];
  //echo "url: $url<br><br>\n";

	//$params = http_build_query($_REQUEST);

	//$ch = curl_init($url);
	$ch = curl_init();

  //echo "url: $url<br><br>\n";
  //echo "params: $params<br><br>\n";

  //$ch_encoded=curl_escape($ch, $url);
  //echo "ch_encoded: $ch_encoded<br><br>\n";


	//curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
  //curl_setopt($ch, CURLOPT_URL, "$url?$params");
  //curl_setopt($ch, CURLOPT_URL, "$url");
  //curl_setopt($ch, CURLOPT_URL, "$ch_encoded");
  //curl_setopt($ch, CURLOPT_URL, "http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=great%20leap%20forwards");




  //YES: curl_setopt($ch, CURLOPT_URL, "http://api.chartlyrics.com/apiv1.asmx/SearchLyricText?lyricText=".$search_encoded);
  curl_setopt($ch, CURLOPT_URL, $endpoint.$params_encoded);

  // tlex, strb, jhnklly@gmail.com
  //curl_setopt($ch, CURLOPT_URL, "http://api.musixmatch.com/ws/1.1/matcher.track.get?apikey=ff0f7ce7a46d87fee8959e5619ed463f&q_lyrics=".$search_encoded);
  //curl_setopt($ch, CURLOPT_URL, "http://api.musixmatch.com/ws/1.1/matcher.track.get?apikey=ff0f7ce7a46d87fee8959e5619ed463f&q_artist=".$search_encoded);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
	$result = curl_exec($ch);
	//echo $result;

if (curl_errno($ch)) {
    echo "curl_err: ";
    print curl_error($ch);
} else {
	echo $result;
	curl_close($ch);
}

	// $url will be first element of $REQ, and $REQ will have the url element removed

	//echo "<pre>";

	//print_r($_REQUEST);
	/*echo "\n";
	echo "\n";
	print_r($_REQUEST);
	echo "\n";
	echo "\n";
	print_r($url);
*/
	// convert params array to string
	//echo "\n params: $params";

	//echo "</pre>";

	// sb like
	// http://api.chartlyrics.com/apiv1.asmx/GetLyric?lyricId=131299&lyricCheckSum=76a96b8a8622fa2ea168fa9e1890e296





?>