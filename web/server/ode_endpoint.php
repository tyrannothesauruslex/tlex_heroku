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

<<<<<<< d145bd9d59ef5affa1455118e44d3a876b4c058f
CREATE TABLE terms (word TEXT PRIMARY KEY NOT NULL, date_added DATE NOT NULL DEFAULT CURRENT_DATE);
CREATE TABLE comments (word TEXT, comment_date DATE NOT NULL DEFAULT CURRENT_DATE, comment TEXT);

CREATE TABLE comments (word TEXT, comment TEXT);

*/
include("$_SERVER[DOCUMENT_ROOT]/server/config.php");
$word = $_REQUEST["term"];

try {
    //$dbh = new PDO("pgsql:host='localhost';dbname=$DB_NAME", $USER, $PASSWORD);
    $dbh = new PDO("pgsql:host='$HOST';dbname=$DB_NAME", $USER, $PASSWORD);

    // INSERT INTO terms (word) VALUES ('moxie');
    $sql = "INSERT INTO terms (word) VALUES ('$word')";

    $inserted = $dbh->exec( $sql );


    $sql = "SELECT word, date_added FROM terms WHERE word = '$word'";

    $result = $dbh->query($sql);
    while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
        echo "<tr>";
        echo "<td>" . $row["word"] . "</td>";
        echo "<td>" . htmlspecialchars($row["date_added"]) . "</td>";
        echo "</tr>";
    }
    echo $sql;
    echo $inserted;
}
catch(PDOException $e) {
    echo $e->getMessage();
}

/*
$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
=======
*/
$word = $_REQUEST["term"];

$dbconn = pg_connect("host=www.tyrannothesauruslex.com dbname=$db user=pgsql password=") or die('Could not connect: ' . pg_last_error());

$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
//echo "<br>alter query: $query\n";
$result = pg_query($dbconn, $query);

/*
if ($result????row = 0) {
    $insert = "INSERT $word, date INTO tlex(term, date)";
    pg_query($dbconn, $insert);
}
*/
// Show the word, def, syns:


// Now check for previous entries:
$query = "SELECT COUNT(*) FROM tlex WHERE term = $word";
//echo "<br>alter query: $query\n";
$result = pg_query($dbconn, $query);





?>





