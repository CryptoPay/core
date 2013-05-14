<?php
$result = true;
$time_left = '13:24';
 
echo '?result=' . $result . '&time_left=' . $time_left;

/*

$query = 'what are widgets anyhow?';
$url = 'http://www.google.com/search?hl=en&q='.urlencode($query);
 
$f = @file_get_contents($url);
 
if ($f !== false) { //you know you've reached their file and they received your GET request
  echo $f;
} else {
  echo '<pre>';
  print_r($http_response_header);
  echo '</pre>';
}
 */