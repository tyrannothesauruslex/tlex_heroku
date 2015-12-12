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

CREATE TABLE terms (word TEXT PRIMARY KEY NOT NULL, date_added DATE NOT NULL DEFAULT CURRENT_DATE);
CREATE TABLE comments (word TEXT, comment_date DATE NOT NULL DEFAULT CURRENT_DATE, comment TEXT);

*/
include('config.php');
$word = $_REQUEST["term"];

try {
    //$dbh = new PDO("pgsql:host='localhost';dbname=$DB_NAME", $USER, $PASSWORD);
    $dbh = new PDO("pgsql:host='$HOST';dbname=$DB_NAME", $USER, $PASSWORD);

    $sql = "INSERT INTO terms (word, date_added) $word, '2015-12-12' ";
    echo $sql;
    $inserted = $dbh->exec( $sql );
    echo $inserted;
}
catch(PDOException $e) {
    echo $e->getMessage();
}

/*
$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
$result = pg_query($dbconn, $query);

if ($result????row = 0) {
    $insert = "INSERT $word, date INTO tlex(term, date)";
    pg_query($dbconn, $insert);
}
*/
// Show the word, def, syns:

// Now check for previous entries/comments:
//$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
//echo "<br>alter query: $query\n";
//$result = pg_query($dbconn, $query);





?>





