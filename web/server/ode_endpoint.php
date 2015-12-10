<?php
// This IS the homage+comments page.

/*
DB design:
    UID / primary key === term? (for now)
    A:
        term1, init_date
        term2, init_date
    B:
        term1, comment_a, comment_date
        term1, comment_b, comment_date
        term1, comment_c, comment_date
        term2, comment_a, comment_date
        term2, comment_b, comment_date
        term2, comment_c, comment_date

*/
$word = $_REQUEST["term"];

$dbconn = pg_connect("host=www.tyrannothesauruslex.com dbname=$db user=pgsql password=") or die('Could not connect: ' . pg_last_error());

$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
//echo "<br>alter query: $query\n";
$result = pg_query($dbconn, $query);

if ($result????row = 0) {
    $insert = "INSERT $word, date INTO tlex(term, date)";
    pg_query($dbconn, $insert);
}

// Now check for previous entries:
$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
//echo "<br>alter query: $query\n";
$result = pg_query($dbconn, $query);





?>





