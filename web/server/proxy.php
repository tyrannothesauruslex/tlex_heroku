<?php
  $url = $_REQUEST['url'];
  $ch = curl_init($url);

  $pageurl=strtok($url,'?');
  //echo "pageurl $pageurl <br>\n";
  $querystring=strtok('?');
  //echo "querystring $querystring <br>\n";
  $ch_encoded=curl_escape($ch, $querystring);

  //echo "ch_encoded $ch_encoded <br>\n";
  //echo $pageurl.'?'.$ch_encoded;
  //echo "<br><br>\n\n";

  //curl_setopt($ch, CURLOPT_URL, $pageurl.'?'.$ch_encoded);
  curl_setopt($ch, CURLOPT_URL, $pageurl.'?'.$querystring);

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
