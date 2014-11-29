<?php

	$url = array_shift($_REQUEST);
	$params = http_build_query($_REQUEST);

	//$ch = curl_init($url);
	$ch = curl_init();
	//curl_setopt($ch, CURLOPT_POSTFIELDS, $params);
	curl_setopt($ch, CURLOPT_URL, "$url?$params");
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);	
	$result = curl_exec($ch);
	//echo $result;

if (curl_errno($ch)) {
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